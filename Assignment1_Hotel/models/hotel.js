const mongoose = require('mongoose'); 
//const { User } = require('../helpers/role');
//const User = require('./user');

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