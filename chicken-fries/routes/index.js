const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passportLocal = require('../auth/local');
const protect = require('connect-ensure-login').ensureLoggedIn;


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Welcome to Chicken & Fries', user:req.user });
});

//get order page
router.get('/order', function (req, res, next) {
    res.render('order', {title:'Order Page'});
});

// get about page
router.get('/about', function (req, res, next) {
    res.render('about', {title: 'About us page'});
});

//get contact page
router.get('/contact', function (req, res, next) {
    res.render('contact', {title:'Contact Us page'});
});

//post contact page
router.post('/contact', function (req, res, next) {
    res.render('contact', {title: 'Message Sent!'});
});

//get location page
router.get('/location', function (req, res, next) {
    res.render('location',{title:'Location page'});
});

//menu selection page page
router.get('/menu-selection', function (req, res, next) {
    res.render('menu-selection', {title:'Create an order for delivery'});
});

//get breakfast menu page
router.get('/breakfast', function (req, res, next) {
    res.render('breakfast', {title: 'Breakfast Menu'});
});

//get lunch page
router.get('/lunch', function (req, res, next) {
    res.render('lunch', {title:'Lunch Menu'});
});

//get dinner menu
router.get('/dinner', function (req, res, next) {
    res.render('dinner', {title:'Dinner Menu'});
});

//get login page
router.get('/login', (req, res, next) => {
    res.render('login', {title: 'Login Page'});
});

router.get('/register', (req,res,next) => {
    res.render('register', {title: 'Registration Form'});
});

//post request to register user
router.post('/register', (req,res,next) => {
    require('bcrypt').hash(req.body.password, 10, (err, pass) => {
        const user = new User({
            username: req.body.username,
            name: req.body.name,
            password: pass
        });

        user.save((err, user) => {
            if(err) return res.redirect('/');
            passportLocal.authenticate('local', {failuserRedirect: '/'})(req,res, () => {
                res.redirect('/profile');
            });
        });
    });
});

//post login
router.post('/login',  (req, res, next) => {
    res.redirect('/login', passportLocal.authenticate('local', {failureRedirect: '/login'}), (req,res,next) => {
        res.redirect('/profile');
    });
});

router.get('logout', (req,res,next) => {
    req.logout();
    res.redirect('/');
});

router.get('/profile', protect(), (req,res,next) => {
    res.render('profile', {user:req.user});
});

//get request for delivery form page
router.get('/delivery', function (req, res, next) {
    res.render('delivery', {title: 'Delivery Form Page'})
});

//post request for delivery form
router.post('/delivery', function (req, res, next) {
    res.render('delivery', {title: 'Delivery instructions saved!'});
});

//get request for review page
router.get('/review', (req,res,next) => {
    res.render('review', {title: 'Review your order'})
});

//get request to checkout form
router.get('/checkout', (req,res,next) => {
    res.render('checkout', {title: 'Checkout'});
});

//get request for thank you page
router.get('/thank-you', (req,res,next) => {
    res.render('thank-you');
});

//get terms page
router.get('/terms', function (req, res, next) {
    res.render('terms', {title:'Terms and Conditions'})
});

//export router
module.exports = router;
