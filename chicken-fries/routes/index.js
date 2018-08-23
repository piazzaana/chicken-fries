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
router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Login Page'});
});

//get terms page
router.get('/terms', function (req, res, next) {
    res.render('terms', {title:'Terms and Conditions'})
});

//export router
module.exports = router;
