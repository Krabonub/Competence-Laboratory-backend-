const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

require("./core/globals");
const db = require("./core/db");
const passport = require("./core/passport");

const notFoundRoute = require("./routes/notFound.route");

const app = express();

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "http://localhost:8080");
  response.header("Access-Control-Allow-Credentials", true);
  response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "secret",
    store: new MongoStore({
      mongooseConnection: db
    })
  })
);
app.use(passport.initialize());
app.use(passport.session());


//
//

app.use(notFoundRoute);

app.listen(CONFIG.get("API_PORT"), () => {
  console.log(`Server is listening to requests on ${CONFIG.get("API_URI")}...`);
});