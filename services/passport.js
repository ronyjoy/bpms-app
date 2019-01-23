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
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
        return done(null, existingUser);
    }
    //create user in the database
    const user = await new User({ googleId: profile.id, name: profile.displayName, image: profile.picture, email: profile.email }).save();
    done(null, user);
}

));

