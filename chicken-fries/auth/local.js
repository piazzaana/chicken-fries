const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcrypt');

passport.use(new Strategy((username, password, next) => {
    User.findOne({username: username}, (err,next) => {
        if(err) return next(err);
        if(!User) return next(null, false);
        bcrypt.compare(password, user.password, (err,res) => {
            if(res) return next(null, user);
            return next(null, false);
        });
    });
}));

module.exports = passport;