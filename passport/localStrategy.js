const User = require("../db/models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "username" // not necessary, DEFAULT
  },
  function(username, password, done) {
    User.find({ "username" : username }, (err, userMatch) => {
      if (err) {
        return done(err);
      }
      if (!userMatch) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (!userMatch[0].checkPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, User);
    });
  }
);

module.exports = strategy;
