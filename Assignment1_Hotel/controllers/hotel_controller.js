const hotelCollection = require('../models/hotel');

//
//POST to create Hotel --Mads
module.exports.addHotel = async function (req, res) {
    let hotel = await hotelCollection.create({
        id: req.body.id,
        name: req.body.name,
    }).catch(reason =>
        res.status(400).json({
            "title": "Unable to create hotel record",
            "detail": reason
        })
    );
    if (hotel) // The hotel was succesfully added to the collection
        res.status(201).json({
            hotel
        })
    else {
        res.status(500).json({
            "title": "Unknown server error"
        })
    };
};

//POST to create rooms for Hotel-id -- Alex


// GET List of rooms from Hotel-id --Trang
// -- list of available rooms from hotel-id - role = User
// -- GET all Rooms for Hotel-id which belong to manager - role = hotelManager

//GET all rooms for All Hotels - role-type -- Randi
// -- list of all my resevations -Role = guest
//
module.exports.getHotelsWithRooms = async function (req, res){
    const hotels = await hotelsCollection.find({})
        .catch(reason => res.status(400).json({
            "title": "Error",
            "detail": reason
        }))
    res.status(200).json({
        hotels
    })
}


//UPDATE list of resevations for Hotel-id -- role = HotelMangaer 

//DELETE reservations for room-id from hotel-id -- role = hotelManager
