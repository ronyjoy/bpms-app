const passport = require('passport');
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
//google auth
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
        return done(null, existingUser);
    }
    //create user in the database
    const user = await new User({ googleId: profile.id, name: profile.displayName, image: profile._json.image.url, email: profile.emails[0].value }).save();
    done(null, user);
}

));
