var express = require('express');
var router = express.Router();

const userCotroller = require('../controllers/user_controller'); 



//router.get('/', hotelController.index); 

router.route('/users')
  .get(userCotroller.getAllUsers);

router.route('/:userId')
  .get(userCotroller.getUser); 


module.exports = router;
