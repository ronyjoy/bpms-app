const passport = require('passport');

module.exports = (app) => {
    //google authentication router
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));


    //google authentication call back router
    app.get('/auth/google/callback', passport.authenticate('google'));
};


