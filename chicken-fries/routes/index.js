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

module.exports = router;
