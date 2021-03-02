var express = require('express');
var router = express.Router();
const hotelController = require('../controllers/hotel_controller');

/**
 * @swagger
 * /hotels:
 *   get:
 *     summary: Retrieve the list of all hotels
 *     description: Retrieve a list of hotels. Including their rooms
 *     responses:
 *       200:
 *         description: A list of hotels.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The hotel's name.
 *                         example: Hotel Four
 *                       managerId:
 *                         type: string
 *                         description: The name of the manager who runs the hotel.
 *                         example: Alexander
 */
router.route('')
  .get(hotelController.index);

/* Post Add hotel */
router.route('/addHotel/:userId')
  .post(hotelController.addHotel); 


/**
* @swagger
* /hotels/:hotelid:
*   post:
*     summary: Add a room to a hotel
*     description: Through a hotel id add a room to the hotel
*     responses:
*       201:
*         description: Hotel room was created succesfully.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 data:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                        hotelid: ObjectId
*                        description: The hotels ID
*                        example: 603e02dfcc68d8751453b861
*                     room:
*                        type: room
*                        description: A json object describing a room
*                        example: {"roomNo": 8,"reservations":[{"dateStart": "2021-03-02T09:18:23.807+00:00","guestId": "Randi"}]}
*/
router.route('/:hotelid')
  //.get(hotelController.getHotel)
  .put(hotelController.addRoomToHotel);

router.route('/AllHotelsWithRooms/:userId')
  .get(hotelController.getHotelsWithRooms);

module.exports = router;
