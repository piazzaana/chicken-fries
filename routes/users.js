const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

const Order = require('../models/order');
const Cart = require('../models/cart');
const Favorite = require('../models/favorite');
const Breakfast = require('../models/breakfast');

let csrfProtection = csrf();
router.use(csrfProtection);

//get user profile page
router.get('/profile', isLoggedIn, (req, res, next) => {
    Order.find({user: req.user}, (err, orders) => {
        if(err){
            console.log('Error!');
        }
        let cart;
        orders.forEach((order) => {
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        });
        res.render('user/profile', {title: 'User profile', orders: orders});
    });
});

//get add favorites route
router.get('/add-breakfast-to-favorites/:id', isLoggedIn, (req,res,next) => {
    //I am just outputting something to test the route, if the js is disabled the route works.
    const breakfastItemId = req.params.id;
    Breakfast.findById(breakfastItemId, (err, breakfastItem) => {
        if(err){
            return res.redirect('/', {title: 'Something went wrong.'});
        }
        breakfastItem.favorite = true;
        console.log(breakfastItem);
        res.render('favorites', {title:'Favorites', favorite: breakfastItem});
    });
});

//remove from favorites
router.get('/remove-from-favorites/:id', isLoggedIn, (req,res,next)=>{
    res.render('favorites', {title:'remove from favorites route'})
});

//get logout out route
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