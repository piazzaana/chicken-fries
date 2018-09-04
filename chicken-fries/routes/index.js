const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET order page. */
router.get('/order', function(req, res, next) {
    res.render('order');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact');
});

/* GET location page. */
router.get('/location', function(req, res, next) {
    res.render('location');
});

/* GET login page.*/
router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Welcome to Chicken & Fries'});
});

/* POST login.*/
router.post('/login', function (req, res, next) {
    res.send("login post route works");
});

/* GET registration page.*/
router.get('/register', function (req, res, next) {
    res.render('registration', {title: 'Welcome to Chicken & Fries'});
});

/* POST registration*/
router.post('/register', function (req, res, next) {
    res.send("register post route works");
});

module.exports = router;
