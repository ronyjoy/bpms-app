//express handles the req from the browser
const express = require('express');
var bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
require('./services/mongo');
require('./services/passport');
const PORT = process.env.PORT || 5000;
require('./routes/customer');
require('./routes/enquiry');
require('./routes/authRoutes');
require('./routes/organization');
const keys = require('./config/keys');
const passport = require('passport');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



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
  require('./routes/customer')(app);
  require('./routes/enquiry')(app);
  require('./routes/organization')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    //all unknow url to react side
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
//listen a port
app.listen(PORT);
