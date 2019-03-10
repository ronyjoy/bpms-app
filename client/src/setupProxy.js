const proxy = require("http-proxy-middleware");

if (process.env.NODE_ENV == "local") {
  module.exports = function(app) {
    app.use(
      proxy(["/auth/auth0", "/login", "/callback", "/api"], {
        target: "http://localhost:5000/"
      })
    );
  };
}
