const mongoose = require('mongoose'); 

const hotelSchema = new mongoose.Schema({
    id: Guid,
    name: String,
    rooms: [{
        id: Guid,
        roomNo: int,
        reservations?: [
            {
                id: Guid,
                dateStart: Date,
                dateEnd: Date
            }
        ],
    }]
})

const Hotel = mongoose.model('Hotel',hotelSchema); 
module.exports = Hotel; 