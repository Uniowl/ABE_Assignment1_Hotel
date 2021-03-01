var express = require('express');
var router = express.Router();

const hotelController = require('../controllers/hotel_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Express' });
});

module.exports = router;

//Test