const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

let Order = require('../models/order');
let Cart = require('../models/cart');

let routeProtection = csrf();
router.use(routeProtection);

//get user profile page
router.get('/profile', isLoggedIn, (req, res, next) => {
    Order.find({user: req.user}, (err, orders) => {
        if(err){
            console.log('Error!');
        }
        // console.log(orders);
        let cart;
        orders.forEach((order) => {
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        });
        res.render('user/profile', {title: 'User profile', orders: orders});
    });
});

//get loug out route
router.get('/logout', isLoggedIn, (req, res, next) => {
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, (req, res, next) => {
    next();
});

//get user sign in page
router.get('/signin', (req, res, next) => {
    let messages = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), messages:messages, hasErrors: messages.length>0});
});

//post route for user sign in
router.post('/signin', passport.authenticate('local.signin',{
    failureRedirect: '/users/signin',
    failureFlash: true
}), (req, res, next) => {
    if(req.session.oldURL){
        res.redirect(req.session.oldURL);
        req.session.oldURL = null;
    }else{
        res.redirect('/users/profile');
    }
});

//get user sign up page
router.get('/signup', (req, res, next) => {
    let messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages:messages, hasErrors: messages.length>0});
});

//post rout for user sign up
router.post('/signup', passport.authenticate('local.signup', {
    failureRedirect: '/users/signup',
    failureFlash: true
}), (req, res, next) => {
    if(req.session.oldURL){
        res.redirect(req.session.oldURL);
        req.session.oldURL = null;
    }else{
        res.redirect('/users/profile');
    }
});

module.exports = router;

function isLoggedIn(req,res,next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req,res,next) {
    if (!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}