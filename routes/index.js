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
});

//get location page
router.get('/location', function (req, res, next) {
    res.render('location',{title:'Location page'});
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
});

module.exports = router;
