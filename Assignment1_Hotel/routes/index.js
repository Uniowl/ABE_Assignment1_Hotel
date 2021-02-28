var express = require('express');
var app = express();
var PORT = 3000;
var https = require('https');
var http = require('http');

var router = express.Router();

const hotelController = require('../controllers/hotel_controller');

// http.createServer(app).listen(80);
// https.createServer(options, app).listen(443);

// app.listen(PORT, function(err){
//   if(err) console.log("Error in server setup");
//   console.log("server listening on port ", PORT);
// })

app.listen(3000);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.route('/AllHotelsWithRooms')
  .get(hotelController.getHotelsWithRooms);

module.exports = router;


//Test