var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Chicken & Fries' });
});

// get about page
router.get('/about', function (req, res, next) {
    res.render('about', {title: 'About us page'});
});

//get contact page
router.get('/contact', function (req, res, next) {
    res.render('contact');
});

//get location page
router.get('/location', function (req, res, next) {
    res.render('location',{title:'Location page'});
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

router.get('/contact', function (req, res, next) {
    res.render('contact', {title: 'Contact Us'});
});

router.get('/about', function (req, res, next) {
    res.render('about', {title: 'About Us'});
});

router.get('/location', function (req, res, next) {
    res.render('location', {title: 'Our Location'});
});

module.exports = router;
