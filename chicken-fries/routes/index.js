var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Chicken & Fries' });
});

router.get('/home', function (req, res, next) {
    res.render('home', {title: 'Home Page'})
});

router.get('/order', function (req, res, next) {
    res.render('order', {title: 'Order Page'})
});

router.get('/contact', function (req, res, next) {
    res.render('contact', {title: 'Contact Us'})
});

router.get('/about', function (req, res, next) {
    res.render('about', {title: 'About Us'})
});

router.get('/location', function (req, res, next) {
    res.render('location', {title: 'Our Location'})
});

router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Login Page'})
});

module.exports = router;
