var express = require('express');
var router = express.Router();
var hotelController = require('../controllers/hotel_controller')

const hotelController = require('../controllers/hotel_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.route('/AllHotelsWithRooms')
  .get(hotelController.getHotelsWithRooms);

module.exports = router;

/* POST add hotel room */
router.route('/:hotelid')
  //.get(hotelController.getHotel)
  .post(hotelController.addRoomToHotel)