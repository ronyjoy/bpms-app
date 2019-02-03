//express handles the req from the browser
import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './services/mongo.service';
import './services/passport.service';
import customer from './routes/customer.route';
import enquiry from "./routes/enquiry.route";
import authRoutes from './routes/auth.routes';
import organization from './routes/organization.route';
import keys from './config/keys';
import passport from 'passport';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//express middleware
app.use(
  cookieSession({
    maxAge: 60 * 60 * 1000,
    //adding encription key to encript the cookie
    keys: [keys.cookieKey]
  })
);

//express middleware
app.use(passport.initialize());
app.use(passport.session());
//routes
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
