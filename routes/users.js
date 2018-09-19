var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

//get user profile page
router.get('/profile', isLoggedIn, function (req, res, next) {
    res.render('user/profile', {title: 'User profile'});
});

//get lougout route
router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, function (req, res, next) {
    next();
});

//get user sign in page
router.get('/signin', function (req, res, next) {
    let messages = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), messages:messages, hasErrors: messages.length>0});
});

//post route for user sign in
router.post('/signin', passport.authenticate('local.signin',{
    successRedirect:'/users/profile',
    failureRedirect: '/users/signin',
    failureFlash: true
}));

//get user sign up page
router.get('/signup', function (req, res, next) {
    let messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages:messages, hasErrors: messages.length>0});
});

//post rout for user sign up
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect:'/users/profile',
    failureRedirect: '/users/signup',
    failureFlash: true
}));

module.exports = router;

function isLoggedIn(req,res,next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req,res,next) {
    if (!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}