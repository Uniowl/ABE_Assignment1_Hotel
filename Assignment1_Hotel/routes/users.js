var express = require('express');
var router = express.Router();
const userController = require('../controllers/user_controller'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// get all users 
router.route('/addAllUsers')
  .get(userController.getAllUsers); 