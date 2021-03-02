const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller'); 


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.route('/register')
  .post(userController.register);

router.route('/login')
  .post(userController.login);

// get all users 
router.route('')
  .get(userController.getAllUsers);

// get specific user from userId
router.route('/:userId')
  .get(userController.getUser);

//Upgrade user
router.route('/user/:userId/userToChange/:userToChangeId')
  .put(userController.upgradeUser); 

module.exports = router;