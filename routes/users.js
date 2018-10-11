const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

const Order = require('../models/order');
const Cart = require('../models/cart');
const Favorite = require('../models/favorite');
const Breakfast = require('../models/breakfast');
const Lunch = require('../models/lunch');
const Dinner = require('../models/dinner');

const routeProtection = csrf();
router.use(routeProtection);

//get user profile page order history
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

//add breakfast items to the favorites list
router.get('/add-breakfast-to-favorites/:id', isLoggedIn, (req,res,next) => {
    const breakfastItemId = req.params.id;
    Breakfast.findById(breakfastItemId, (err, breakfastItem) => {
        if (err){
            console.log('ERROR FINDING ITEM', err);
        }
        let fav = new Favorite({
            user: req.user,
            imagePath: breakfastItem.imagePath,
            name: breakfastItem.name,
            price: breakfastItem.price
        });
        fav.save((err, savedItem)=>{
            if(err){
                console.log('ERROR SAVING', err);
            }
        });
        return res.redirect('/users/favorites');
    });
});

//add lunch items to the favorites list
router.get('/add-lunch-to-favorites/:id', isLoggedIn, (req,res,next) => {
    const lunchItemId = req.params.id;
    Lunch.findById(lunchItemId, (err, lunchItem) => {
        if (err){
            console.log('ERROR FINDING ITEM', err);
        }
        let fav = new Favorite({
            user: req.user,
            imagePath: lunchItem.imagePath,
            name: lunchItem.name,
            price: lunchItem.price
        });
        fav.save((err, savedItem)=>{
            if(err){
                console.log('ERROR SAVING', err);
            }
        });
        return res.redirect('/users/favorites');
    });
});

//add dinner items to the favorites list
router.get('/add-dinner-to-favorites/:id', isLoggedIn, (req,res,next) => {
    const dinnerItemId = req.params.id;
    Dinner.findById(dinnerItemId, (err, dinnerItem) => {
        if (err){
            console.log('ERROR FINDING ITEM', err);
        }
        let fav = new Favorite({
            user: req.user,
            imagePath: dinnerItem.imagePath,
            name: dinnerItem.name,
            price: dinnerItem.price
        });
        fav.save((err, savedItem)=>{
            if(err){
                console.log('ERROR SAVING', err);
            }
        });
        return res.redirect('/users/favorites');
    });
});

//remove from favorites
router.get('/remove-from-favorites/:id', isLoggedIn, (req,res,next) => {
    const favId = req.params.id;
    Favorite.findOneAndRemove({ _id: favId }, (err, result)=>{
        if (err){
            console.log('ERROR ', err);
        }
        res.redirect('/users/favorites');
    });
});

//get a list of favorites
router.get('/favorites', isLoggedIn, (req,res,next)=>{
    Favorite.find({user: req.user}, (err, favorites)=>{
        if (err){
            console.log("ERROR RETRIEVING FAVORITES ", err);
        }
        res.render('user/favorites', {title:'My Favorites', favorites: favorites});
    });
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