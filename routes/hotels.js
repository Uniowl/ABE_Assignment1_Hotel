// const jwt = require('express-jwt');
// const auth = jwt({
//   secret: process.env.JWT_SECRET,
// });
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

/**
 * @swagger
 * /hotels:
 *   post:
 *     summary: Add new hotel to collection and assign user as manager
 *     description: Creates a new hotel and adds the given userId as a manager
 *     parameters: 
 *     - in: path
 *       name: userId
 *       required: true
 *       description: The unique ID of the user who will be assigned manager
 *     responses:
 *       200:
 *         description: The hotel was created and manager was added
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
 *                       userId:
 *                         type: string
 *                         description: Id for the user who will be assigned as manager for the created hotel
 *                         example: 603e02dfcc68d8751453b861
 */
router.route('/addHotel/:userId')
.post(hotelController.addHotel);

/**
* @swagger
* /hotels/:hotelid:
*   post:
*     summary: Add a room to a hotel
*     description: Through a hotel id add a room to the hotel
*     parameters: 
*     - in: path
*       name: hotelId
*       required: true
*       description: The unique ID of the hotel that the room will be added to
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
router.route('/:hotelId/user/:userId')
  //.get(hotelController.getHotel)
  .put(hotelController.addRoomToHotel);

/**
* @swagger
* /hotels/AllHotelsWithRooms/:userId:
*   get:
*     summary: Returns hotelrooms for user
*     description: Shows all hotelrooms where the given userID is found in the reservationlist
*     parameters: 
*     - in: path
*       name: userId
*       required: true
*       description: The rooms that have this user ID in its reservationlist will be shown
*     responses:
*       200:
*         description: Found hotelrooms
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
router.route('/AllHotelsWithRooms/:userId')
  .get(hotelController.getHotelsWithRooms);

/*GET rooms from hotelid owned by manager*/
router.route('/:userid/:hotelid')
.get(hotelController.getRoomsFromHotelID)

/*GET available rooms*/
router.route('/available/:userid/:hotelid')
.get(hotelController.getAvailableRoomsFromHotelid)


router.route('/available/:hotelid')
.get(hotelController.getAvailableRoomsFromHotelid)
