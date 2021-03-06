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

router.post('/contact', (req,res,next)=>{
    res.render('thank-you', {title: 'Your message has been received. Thank You!'})
});

router.get('/location', (req, res, next) => {
    res.render('location', {title: 'Our Location'});
});

//get breakfast menu page
router.get('/breakfast', (req, res, next) => {
    Breakfast.find((err, docs) => {
        res.render('menus/breakfast', {title: 'Breakfast Menu', breakfast: docs});
    });
});

router.get('/add-to-cart/breakfast/:id', (req, res, next) => {
    const breakfastItemId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});
    Breakfast.findById(breakfastItemId, (err, breakfastItem) => {
        if(err){
            return res.redirect('/', {title: 'Something went wrong.'});
        }
        cart.add(breakfastItem, breakfastItem.id);
        req.session.cart = cart;
        res.redirect('/breakfast');
    });
});

//get lunch page
router.get('/lunch', (req, res, next) => {
    Lunch.find((err, docs) => {
        res.render('menus/lunch', {title:'Lunch Menu', lunch: docs});
    });
});

router.get('/add-to-cart/lunch/:id', (req, res, next) => {
    const lunchItemId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});
    Lunch.findById(lunchItemId, (err, lunchItem) => {
        if(err){
            return res.redirect('/', {title: 'Something went wrong.'});
        }
        cart.add(lunchItem, lunchItem.id);
        req.session.cart = cart;
        res.redirect('/lunch');
    });
});

//get dinner menu
router.get('/dinner', (req, res, next) => {
    Dinner.find((err, docs) => {
        res.render('menus/dinner', {title:'Dinner Menu', dinner:docs});
    });
});

router.get('/add-to-cart/dinner/:id', (req, res, next) => {
    const dinnerItemId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});
    Dinner.findById(dinnerItemId, (err, dinnerItem) => {
        if(err){
            return res.redirect('/', {title: 'Something went wrong.'});
        }
        cart.add(dinnerItem, dinnerItem.id);
        req.session.cart = cart;
        res.redirect('/dinner');
    });
});

//reduce by 1
router.get('/reduce/:id', (req,res,next)=>{
    let itemId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(itemId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

//remove
router.get('/remove/:id', (req,res,next)=>{
    let itemId = req.params.id;
    let cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(itemId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
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
    console.log(process.env.SECRET_KEY);

    stripe.charges.create({
        //100 is the number of cents on a dollar
        amount: cart.totalPrice * 100,
        currency: "usd",
        source: req.body.stripeToken[1], // obtained with Stripe.js
        description: "Test charge",
    }, (err, charge) => {
        if (err){
            console.log(err);
        }
        let order = new Order({
            user: req.user,
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save((err, result) => {
            req.session.cart = null;
            res.redirect('/');
        });
    });
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    req.session.oldURL = req.url;
    res.redirect('/users/signin');
}