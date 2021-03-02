var express = require('express');
var router = express.Router();

const userCotroller = require('../controllers/user_controller'); 

<<<<<<< HEAD
/* GET home page. */
// router.get('/', function(req, res, next) {
//   return res.render('index', { title: 'Express' });
// });
router.route('')
  .get(hotelController.index);
  // .post(hotelController.addHotel)
=======

>>>>>>> master

//router.get('/', hotelController.index); 

router.route('/users')
  .get(userCotroller.getAllUsers);

router.route('user/:userId')
  .get(userCotroller.getUser)
  .post(hotelController.addHotel); 

router.route('user/:userId/userToChange/:userToChangeId')
  .put(userCotroller.upgradeUser); 


module.exports = router;
