var passport = require("passport");
var User = require("../models/user");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcryptjs");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      User.findOne({ email: email }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!user.comparePasswords(password)) {
          return done(null, false);
        }
        if (!user.verified) {
          return done(null, false);
        }
        user.lastAuthorizationDate = new Date();
        user.save();
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
