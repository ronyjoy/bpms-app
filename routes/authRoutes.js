const passport = require('passport');

module.exports = (app) => {
    //google authentication router
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })


    //google authentication call back router
    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard');
        }
    );



    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
};


