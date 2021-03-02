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

//PUT to create rooms for Hotel-id -- Alex
module.exports.addRoomToHotel = async function (req, res) {
    try {
        let hotel = await hotelCollection.findByIdAndUpdate(req.params.hotelid, {

        }, {
            new: true
        })
        if (hotel) // The student was succesfully added to the collection
            res.status(200).json({
                hotel
            })
        else {
            res.status(500).json({
                "title": "Unknown server error"
            })
        };
    } catch (hotel) {
        res.status(400).json({
            "title": "Unable to add room to hotel",
            "detail": hotel
        })
    }
}
// GET List of rooms from Hotel-id --Trang
// -- list of available rooms from hotel-id - role = User
// -- GET all Rooms for Hotel-id which belong to manager - role = hotelManager

//GET all rooms for All Hotels - role-type -- Randi
// -- list of all my resevations -Role = guest
//

//UPDATE list of resevations for Hotel-id -- role = HotelMangaer 

//DELETE reservations for room-id from hotel-id -- role = hotelManager
