const hotelCollection = require('../models/hotel');

//
// GET home page 
module.exports.index = function (req, res) {
    res.render('index', {title: 'Express'}); 
}; 


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
module.exports.getRoomsFromHotelID = async function (req, res) {
    
    try {
        console.log(req.params.hotelid)
        const manager = manager.findById()
        const hotel = await hotelCollection.findById(req.params.hotelid);
        if(hotel) {
            res.status(200).json({
                rooms: hotel.rooms
            })
        } else {
            throw ("Rooms not found from Hotel-id");
        }
    } catch (err) {
        res.status(400).json({
            "title": "Unable to read rooms from DB",
            "detail": err
        })
    }   
}
// -- list of available rooms from hotel-id - role = User
// -- GET all Rooms for Hotel-id which belong to manager - role = hotelManager

//GET all rooms for All Hotels - role-type -- Randi
// -- list of all my resevations -Role = guest

//UPDATE list of resevations for Hotel-id -- role = HotelMangaer 

//DELETE reservations for room-id from hotel-id -- role = hotelManager
