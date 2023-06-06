// lib/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// This is just an example; you would get these from your database
const users = [{ id: 1, email: 'example@example.com', password: '$2a$10$..........' }]; // Use bcrypt.hash to create hashed passwords

passport.use(new LocalStrategy({ usernameField: 'email' },
  function(email, password, done) {
    const user = users.find(user => user.email === email);
    if (!user) { return done(null, false); }
    if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }
    return done(null, user);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  const user = users.find(user => user.id === id);
  done(null, user);
});

module.exports = passport;
