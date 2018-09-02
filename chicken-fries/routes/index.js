var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Chicken & Fries' });
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

//get location page
router.get('/location', function (req, res, next) {
    res.render('location',{title:'Location page'});
});

//get pick up order page
router.get('/pickup', function (req, res, next) {
    res.render('pickup', {title:'Pickup'});
});

//get delivery order page
router.get('/delivery', function (req, res, next) {
    res.render('delivery', {title:'Delivery'});
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

router.get('/order', function (req, res, next) {
    res.render('order', {title: 'Order Page'});
});

router.get('/contact', function (req, res, next) {
    res.render('contact', {title: 'Contact Us'});
});

router.get('/about', function (req, res, next) {
    res.render('about', {title: 'About Us'});
});

router.get('/location', function (req, res, next) {
    res.render('location', {title: 'Our Location'});
});

router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Login Page'});
});

module.exports = router;
