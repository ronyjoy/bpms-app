//express handles the req from the browser
const express = require('express');
const cookieSession = require('cookie-session');
require('./services/mongo');
require('./services/passport');
const PORT = process.env.PORT || 5000;
require('./routes/customer');
require('./routes/authRoutes');
const keys = require('./config/keys');
const passport = require('passport');

const app = express();
//express middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //adding encription key to encript the cookie 
    keys: [keys.cookieKey]

  }
  ));

//express middleware
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/customer')(app)




//root message - post
app.post('/', function (req, res) {
  res.json({ message: 'BPMS API Root!' });
});
//root message - get
app.get('/', function (req, res) {
  res.json({ message: 'BPMS API Root!' }
  );
});

if (process.env.NODE_ENV) {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    //all unknow url to react side
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
//listen a port
app.listen(PORT);
