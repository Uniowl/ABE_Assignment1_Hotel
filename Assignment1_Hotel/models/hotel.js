const mongoose = require('mongoose'); 
//const { User } = require('../helpers/role');
//const User = require('./user');

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

const hotelSchema = new mongoose.Schema({
    id: String,
    name: String,
    managerId: String,
    rooms: [{
        id: String,
        roomNo: Number,
        reservations: [
            {
                id: String,
                guestId: String,
                dateStart: Date,
                dateEnd: Date
            }
        ],
    }]
})

const Hotel = mongoose.model('Hotel',hotelSchema); 
module.exports = Hotel; 