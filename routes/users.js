var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// //get pick up order page //make it a user route
// router.get('/pickup', function (req, res, next) {
//     res.render('pickup', {title:'Pickup'});
// });

// //get delivery order page //make it a user route
// router.get('/delivery', function (req, res, next) {
//     res.render('delivery', {title:'Delivery'});
// });

//make it a user route
router.get('/order', function (req, res, next) {
    res.render('order', {title: 'Order Page'});
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

//get user profile page
router.get('/profile', function (req, res, next) {
    res.render('user/profile', {title: 'User profile'});
});

module.exports = router;
