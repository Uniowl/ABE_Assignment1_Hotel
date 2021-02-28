const hotelCollection = require('../models/hotel');

//
//POST to create Hotel --Mads

//POST to create rooms for Hotel-id -- Alex
module.exports.addRoomToHotel = function (req, res) {
    try {
        let hotel = await hotelCollection.findByIdAndUpdate(req.params.id, {
            roomNo: req.body.roomNo
        }, {
            new: true
        });
        if (hotel) // The hotel room was succesfully added to the hotel
        res.status(200).json({
            hotel
        })
        else {
            res.status(500).json({
                "title": "Unknown server error"
            })
        };
    } catch (reason) {
        res.status(400).json({
            "title": "Unable to update hotel record",
            "detail": reason
        })
    }   
};

// GET List of rooms from Hotel-id --Trang
// -- list of available rooms from hotel-id - role = User
// -- GET all Rooms for Hotel-id which belong to manager - role = hotelManager

//GET all rooms for All Hotels - role-type -- Randi
// -- list of all my resevations -Role = guest
//

//UPDATE list of resevations for Hotel-id -- role = HotelMangaer 

//DELETE reservations for room-id from hotel-id -- role = hotelManager
