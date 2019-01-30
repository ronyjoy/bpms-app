//express handles the req from the browser
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './services/mongo';
import './services/passport';
const PORT = process.env.PORT || 5000;
import customer from './routes/customer';
import enquiry from "./routes/enquiry";
import authRoutes from './routes/authRoutes';
import organization from './routes/organization';
import keys from './config/keys';
import passport from 'passport';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//express middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //adding encription key to encript the cookie
    keys: [keys.cookieKey]
  })
);

//express middleware
app.use(passport.initialize());
app.use(passport.session());
app.use("", authRoutes);
app.use("/api/customer", customer);
app.use("/api/enquiry", enquiry);
app.use("/api/organizations", organization);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    //all unknow url to react side
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//listen a port
app.listen(PORT);
