var express = require('express');
var router = express.Router();

const hotelController = require('../controllers/hotel_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.route('/AllHotelsWithRooms')
  .get(hotelController.getHotelsWithRooms);

module.exports = router;


//Test