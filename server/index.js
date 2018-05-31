const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

require("./core/globals");
const db = require("./core/db");
const passport = require("./core/passport");

const app = express();

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "http://localhost:4200");
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

const notFoundRoute = require("./routes/notFound.route");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const competenceRoute = require("./routes/competence.route");
const competenceGroupRoute = require("./routes/competenceGroup.route");
const evaluationRoute = require("./routes/evaluation.route");
const positionRoute = require("./routes/position.route");
const levelRoute = require("./routes/level.route");

//
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/competence", competenceRoute);
app.use("/competenceGroup", competenceGroupRoute);
app.use("/evaluation", evaluationRoute);
app.use("/position", positionRoute);
app.use("/level", levelRoute)
//

app.use(notFoundRoute);

app.listen(CONFIG.get("API_PORT"), () => {
  console.log(`Server is listening to requests on ${CONFIG.get("API_URI")}...`);
});