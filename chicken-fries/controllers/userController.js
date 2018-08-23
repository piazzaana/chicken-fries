let User = require('../models/User');

//display a list of all users
exports.user_list = function (req, res) {
    res.send('User list');
};

//display details for a specific user
exports.user_detail = function (req, res) {
    res.send('User detail: ' + req.params.id);
};

//display register user form on get
exports.register_user_get = function (req, res, next) {
    res.render('register', {title: 'Create an account'})
};

//handle register user on post
exports.register_user_post = function (req, res) {
    res.send('Register user post');
};

//display delete user form on get
exports.user_delete_get = function (req, res) {
    res.send('User delete get');
};

//handle delete user on post
exports.user_delete_post = function (req, res) {
    res.send('User delete post');
};

//display user update form on get
exports.user_update_get = function (req, res) {
    res.send('User update get');
};

//handle user update form on post
exports.user_update_post = function (req, res) {
    res.send('User update post');
};