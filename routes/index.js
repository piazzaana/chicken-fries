const express = require('express');
const router = express.Router();
const Breakfast = require('../models/breakfast');
const Lunch = require('../models/lunch');
const Dinner = require('../models/dinner');
const Cart = require('../models/cart');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome to Chicken & Fries' });
});

router.get('/order', function (req, res, next) {
    res.render('order', {title: 'Order Page'});
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
        res.render('menus/breakfast', {title: 'Breakfast Menu', breakfast: docs});
    });
});

router.get('/add-to-cart/breakfast/:id', function (req, res, next) {
    let bfItemId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});
    Breakfast.findById(bfItemId, function (err, bfItem) {
        if(err){
            return res.redirect('/', {title: 'Something went wrong.'});
        }
        cart.add(bfItem, bfItem.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/breakfast');
    });
});

//get lunch page
router.get('/lunch', function (req, res, next) {
    Lunch.find(function (err, docs) {
        res.render('menus/lunch', {title:'Lunch Menu', lunch: docs});
    });
});

router.get('/add-to-cart/lunch/:id', function (req, res, next) {
    let lunchItemId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});
    Lunch.findById(lunchItemId, function (err, lunchItem) {
        if(err){
            return res.redirect('/', {title: 'Something went wrong.'});
        }
        cart.add(lunchItem, lunchItem.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/lunch');
    });
});

//get dinner menu
router.get('/dinner', function (req, res, next) {
    Dinner.find(function (err, docs) {
        res.render('menus/dinner', {title:'Dinner Menu', dinner:docs});
    });
});

router.get('/add-to-cart/dinner/:id', function (req, res, next) {
    let dinnerItemId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});
    Dinner.findById(dinnerItemId, function (err, dinnerItem) {
        if(err){
            return res.redirect('/', {title: 'Something went wrong.'});
        }
        cart.add(dinnerItem, dinnerItem.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/dinner');
    });
});

router.get('/shopping-cart', function (req, res, next) {
    if(!req.session.cart){
        return res.render('shopping-cart',{foodItems: null});
    }
    let cart = new Cart(req.session.cart);
    res.render('shopping-cart', {foodItems: cart.generateArray(), totalPrice: cart.totalPrice})
});

module.exports = router;
