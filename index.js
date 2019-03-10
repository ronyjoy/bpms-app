//express handles the req from the browser
const path = require("path");
import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./services/mongo.service";
import "./services/passport.service";
import customer from "./routes/customer.route";
import enquiry from "./routes/enquiry.route";
import authRoutes from "./routes/auth.routes";
import organization from "./routes/organization.route";
import keys from "./config/keys";
import passport from "passport";
import logger from "./core/logger/app.logger";

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";
logger.info("server starting in port %s", PORT);
logger.info("node environment is %s", process.env.NODE_ENV);

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

if (process.env.NODE_ENV !== "local") {
  // Static files
  const CLIENT_BUILD_PATH = path.join(__dirname, "../../client/build");
  app.use(express.static(CLIENT_BUILD_PATH));
  app.get("*", (req, res) => {
    //all unknow url to react side
    res.sendFile(path.resolve(CLIENT_BUILD_PATH, "index.html"));
  });
}
//listen a port
app.listen(PORT);
