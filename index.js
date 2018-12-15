const express = require('express');
require('./services/mongo');
require('./services/passport');
const PORT = process.env.PORT || 5000;
require('./routes/customer');
require('./routes/authRoutes');

const app = express();
app.listen(PORT);

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




module.exports = app;
