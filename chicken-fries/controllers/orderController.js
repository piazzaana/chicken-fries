let Order = require('../models/Order');

//display a list of orders
exports.order_list = function (req, res) {
    res.send('Order list');
};

//display detail for a specific order
exports.order_detail = function (req, res) {
    res.send('Order detail: ' + req.params.id);
};

//display create order form on get
exports.create_order_get = function (req, res) {
    res.send('Create order get');
};

//handle create order on post
exports.create_order_post = function (req, res) {
    res.send('Create order post');
};

//display delete order form on get
exports.delete_order_get = function (req, res) {
    res.send('Delete order get');
};

//handle delete order on post
exports.delete_order_post = function (req, res) {
    res.send('Delete order post');
};

//display update order form on get
exports.update_order_get = function (req, res) {
    res.send('Update order get');
};

//handle update order form on post
exports.update_order_post = function (req, res) {
    res.send('Update order post');
};