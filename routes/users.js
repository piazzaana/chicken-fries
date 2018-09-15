var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//get pick up order page //make it a user route
router.get('/pickup', function (req, res, next) {
    res.render('pickup', {title:'Pickup'});
});

//get delivery order page //make it a user route
router.get('/delivery', function (req, res, next) {
    res.render('delivery', {title:'Delivery'});
});

//make it a user route
router.get('/order', function (req, res, next) {
    res.render('order', {title: 'Order Page'});
});

//make it a user route
router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Login Page'});
});

module.exports = router;
