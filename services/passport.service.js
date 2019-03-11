import  passport from 'passport';
import Auth0Strategy from 'passport-auth0';
import keys from '../config/keys';
import UserController from  '../controllers/user.controller';
import log from '../core/logger/app.logger'

//setting the user to the cookie
passport.serializeUser((user, done) => {
    log.info('serializing the user %s',user.email)
    done(null, user.email);
});
//getting the user from the cookie
passport.deserializeUser( async (id, done) => {
    log.info('deserializing the user %s',id)
    const user = await UserController.getByEmail(id);
    done(null, user);
});

//auth0 auth
passport.use(new Auth0Strategy({
    domain: keys.domain,
    clientID: keys.auth0ClientID,
    clientSecret: keys.auth0ClientSecret,
    callbackURL: '/api/auth/callback'
}, async (accessToken, refreshToken, extraParams, profile, done) => {
    log.info ('loggedin user information %o,%s,%s,%o',accessToken,refreshToken,extraParams,profile);
    log.info('finding user by email %s',profile._json.email);
    let user = await UserController.getByEmail(profile._json.email);
    log.info('user found in db is  %o',user);
    
    if (user) {
        log.info('logged in user found in the db so returning..')
        return done(null, user);
    }
    //create user in the database
    log.info('loggein in user is logging first time so creating new user...')
    user = await UserController.add({ userid: profile._json.sub, name: profile._json.name, image: profile._json.picture, email: profile._json.email });
    log.info('Saved user info after logging first time %o',user)
    done(null, user);
}

));

