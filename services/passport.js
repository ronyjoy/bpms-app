const passport = require('passport');
const Auth0Strategy = require('passport-auth0').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose')
const User = mongoose.model('users');

//setting the user to the cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});
//getting the user from the cookie
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

//auth0 auth
passport.use(new Auth0Strategy({
    domain: keys.domain,
    clientID: keys.auth0ClientID,
    clientSecret: keys.auth0ClientSecret,
    callbackURL: '/callback',
    proxy: true
}, async (accessToken, refreshToken, extraParams, profile, done) => {
    console.log("accessToken");
    console.log(accessToken);
    console.log("extraParams");
    console.log(extraParams.id_token);
    console.log("profile");
    console.log(profile);
    console.log("email");
    console.log(profile._json.email);
    
    const existingUser = await User.findOne({ email: profile._json.email });
    console.log("existingUser");
    console.log(existingUser);
    
    if (existingUser) {
        return done(null, existingUser);
    }
    //create user in the database
    const user = await new User({ userid: profile._json.sub, name: profile._json.name, image: profile._json.picture, email: profile._json.email }).save();
    done(null, user);
}

));

