var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Chicken & Fries' });
});

//get order page
router.get('/order', function (req, res, next) {
    res.render('order');
});

// get about page
router.get('/about', function (req, res, next) {
    res.render('about');
});

//get contact page
router.get('/contact', function (req, res, next) {
    res.render('contact');
});

//get location page
router.get('/location', function (req, res, next) {
    res.render('location');
});

router.get('/create-pick-up-order', function (req, res, next) {
    res.render('create-pick-up-order');
});

router.get('/create-delivery-order', function (req, res, next) {
    res.render('create-delivery-order');
});

module.exports = router;
