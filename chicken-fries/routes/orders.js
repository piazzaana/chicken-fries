let express = require('express');
let router = express.Router();
//require controller modules
let order_controller = require('../controllers/orderController');

//get request for creating an order
router.get('/create', order_controller.create_order_get);

//post request for creating an order
router.post('/create', order_controller.create_order_post);

//get request to delete an order
router.get('/:id/delete', order_controller.delete_order_get);

//post request to delete an order
router.post('/:id/delete', order_controller.delete_order_post);

//get request to update an order
router.get('/:id/update', order_controller.update_order_get);

//post request to update an order
router.post('/:id/update', order_controller.update_order_post);

//get request for one order
router.get('/:id', order_controller.order_detail);

//get request for a list of all orders
router.get('/', order_controller.order_list);

module.exports = router;