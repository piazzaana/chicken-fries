<<<<<<< HEAD
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
=======
const express = require('express');
const router = express.Router();
const Breakfast = require('../models/breakfast');
const Lunch = require('../models/lunch');
const Dinner = require('../models/dinner');

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
>>>>>>> 5f01b950e8dc359311d8dc637cb5e46f38e787ce
});

//get location page
router.get('/location', function (req, res, next) {
    res.render('location',{title:'Location page'});
<<<<<<< HEAD
});

//get pick up order page
router.get('/create-pick-up-order', function (req, res, next) {
    res.render('create-pick-up-order', {title:'Create an order for pick up'});
});

//get delivery order page
router.get('/create-delivery-order', function (req, res, next) {
    res.render('create-delivery-order', {title:'Create an order for delivery'});
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
=======
});

//get breakfast menu page
router.get('/breakfast', function (req, res, next) {
    Breakfast.find(function (err, docs) {
        res.render('breakfast', {title: 'Breakfast Menu', breakfast: docs});
    });
});

//get lunch page
router.get('/lunch', function (req, res, next) {
    Lunch.find(function (err, docs) {
        res.render('lunch', {title:'Lunch Menu', lunch: docs});
    });
});

//get dinner menu
router.get('/dinner', function (req, res, next) {
    Dinner.find(function (err, docs) {
        res.render('dinner', {title:'Dinner Menu', dinner:docs});
    });
>>>>>>> 5f01b950e8dc359311d8dc637cb5e46f38e787ce
});

module.exports = router;
