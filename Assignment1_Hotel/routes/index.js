var express = require('express');
var router = express.Router();
var hotelController = require('../controllers/hotel_controller'); 
const userCotroller = require('../controllers/user_controller'); 
const Hotel = require('../models/hotel');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   return res.render('index', { title: 'Express' });
// });
router.route('')
  .get(hotelController.index)
  .post(hotelController.addHotel);


router.get('/', hotelController.index); 


/* GET list if rooms from hotel id */
router.route('/:hotelid')
.get(hotelController.getRoomsFromHotelID)

module.exports = router;

/* Post Add hotel */
// router.route('/addHotel')
//   .post(hotelController.addHotel); 

/* POST add hotel room */
// router.route('/:hotelid')
//   //.get(hotelController.getHotel)
//   .post(hotelController.addRoomToHotel)
