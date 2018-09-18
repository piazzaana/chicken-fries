var express = require('express');
var router = express.Router();
var csrf = require('csurf');

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

// //make it a user route
// router.get('/order', function (req, res, next) {
//     res.render('order', {title: 'Order Page'});
// });

//get user sign in page
router.get('/signin', function (req, res, next) {
    res.render('user/signin', {title: 'sign in page'});
});

//get user sign up page
router.get('/signup', function (req, res, next) {
    res.render('user/signup', {csrfToken: req.csrfToken()});
});

//post rout for user sign up
router.post('/signup', function (req, res, next) {
    res.redirect('/');
});

//get user profile page
router.get('/profile', function (req, res, next) {
    res.render('user/profile', {title: 'User profile'});
});

//get pick up order page //make it a user route
router.get('/pickup', function (req, res, next) {
    res.render('pickup', {title:'Pickup'});
});

//get delivery order page //make it a user route
router.get('/delivery', function (req, res, next) {
    res.render('delivery', {title:'Delivery'});
});

//make it a user route
router.get('/order', function (req, res, next) {
    res.render('order', {title: 'Order Page'});
});

//make it a user route
router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Login Page'});
});

module.exports = router;
