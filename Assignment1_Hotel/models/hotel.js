const mongoose = require('mongoose'); 

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
                dateStart: Date,
                dateEnd: Date
            }
        ],
    }]
})

const Hotel = mongoose.model('Hotel',hotelSchema); 
module.exports = Hotel;