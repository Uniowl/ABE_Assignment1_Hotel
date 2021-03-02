const hotelCollection = require('../models/hotel');
const userCollection = require('../models/user'); 
const hotels = require('../hotels'); 
const { User } = require('../helpers/role');
const usersList = require('../usersList');
const role = require('../helpers/role');

//
// GET home page 
module.exports.index = function (req, res) {
    res.render('index', {title: 'Express'}); 
}; 


//POST to create Hotel --Mads
module.exports.addHotel = async function (req, res) {
    const userId = req.params.userId; 
    const user = await userCollection.findById(userId); 
    if(user.role === role.HotelManager){
            let hotel = await hotelCollection.create({
                id: req.body.id,
                name: req.body.name,
                managerId: user.name,
                rooms: req.body.rooms
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
    } else {
        res.status(401).json({
            "title": "User not authorized - need to be a hotelmanager to create a Hotel"
        })
    }
};

//POST to create rooms for Hotel-id -- Alex


// GET List of rooms from Hotel-id --Trang
// -- list of available rooms from hotel-id - role = User
// -- GET all Rooms for Hotel-id which belong to manager - role = hotelManager

//GET all rooms for All Hotels - role-type -- Randi
// -- list of all my resevations -Role = guest
//

//UPDATE list of resevations for Hotel-id -- role = HotelMangaer 

//DELETE reservations for room-id from hotel-id -- role = hotelManager
