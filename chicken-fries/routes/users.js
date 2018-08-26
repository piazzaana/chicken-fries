let express = require('express');
let router = express.Router();
//require controller modules
let user_controller = require('../controllers/userController');

//post request to register user
router.post('/register', user_controller.register_user_post);

//get request to delete user
router.get('/:id/delete', user_controller.user_delete_get);

//post request to delete user
router.post('/:id/delete', user_controller.user_delete_post);

//get request to update user
router.get('/:id/update', user_controller.user_update_get);

//post request to update user
router.post('/:id/update', user_controller.user_update_post);

//get request for one user
router.get('/:id', user_controller.user_detail);

/* GET users listing. */
router.get('/', user_controller.user_list);

module.exports = router;
