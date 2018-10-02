const express = require('express');
const router = express.Router();

const Breakfast = require('../models/breakfast');
const Lunch = require('../models/lunch');
const Dinner = require('../models/dinner');
const Cart = require('../models/cart');
const Order = require('../models/order');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Welcome to Chicken & Fries' });
});

// get about page
router.get('/about', (req, res, next) => {
    res.render('about', {title: 'About us page'});
});

router.get('/contact', (req, res, next) => {
    res.render('contact', {title: 'Contact Us'});
});

router.get('/location', (req, res, next) => {
    res.render('location', {title: 'Our Location'});
});

//get breakfast menu page
router.get('/breakfast', (req, res, next) => {
    Breakfast.find(function (err, docs) {
        res.render('menus/breakfast', {title: 'Breakfast Menu', breakfast: docs});
    });
});

router.get('/add-to-cart/breakfast/:id', (req, res, next) => {
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
router.get('/lunch', (req, res, next) => {
    Lunch.find(function (err, docs) {
        res.render('menus/lunch', {title:'Lunch Menu', lunch: docs});
    });
});

router.get('/add-to-cart/lunch/:id', (req, res, next) => {
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
router.get('/dinner', (req, res, next) => {
    Dinner.find(function (err, docs) {
        res.render('menus/dinner', {title:'Dinner Menu', dinner:docs});
    });
});

router.get('/add-to-cart/dinner/:id', (req, res, next) => {
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

router.get('/shopping-cart', (req, res, next) => {
    if(!req.session.cart){
        return res.render('shopping-cart',{foodItems: null});
    }
    let cart = new Cart(req.session.cart);
    res.render('shopping-cart', {foodItems: cart.generateArray(), totalPrice: cart.totalPrice})
});

router.get('/checkout', isLoggedIn, (req, res, next) => {
    if(!req.session.cart){
        return res.redirect('/shopping-cart');
    }
    let cart = new Cart(req.session.cart);
    res.render('checkout',{total: cart.totalPrice});
});

router.post('/checkout', isLoggedIn, (req, res, next) => {
    if(!req.session.cart){
        return res.redirect('/shopping-cart');
    }
    let cart = new Cart(req.session.cart);
    let stripe = require("stripe")(process.env.SECRET_KEY);

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken[1], // obtained with Stripe.js
        description: "Test charge",
    }, function(err, charge) {
        console.log("inside the create charges function");
        if (err){
            console.log(err);
        }
        console.log('CHARGE ', charge);
        let order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function (err, result) {
            req.session.cart = null;
            res.redirect('/');
        });
    });
    console.log(req.body);
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    req.session.oldURL = req.url;
    res.redirect('/users/signin');
}