const hotelCollection = require('../models/hotel');
const userCollection = require('../models/user');
const role = require('../helpers/role');
const hotels = require('../hotels'); 

//
// GET home page 
module.exports.index = function (req, res) {
    res.render('index', {title: 'Hotels'}); 
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

//GET all rooms for All Hotels 
// -- role=admin: can see all info about all hotels
// -- role=manager: can see list of hotels which the manger is on
// -- role=guest: list of all my resevations
// -- role=user: no access
module.exports.getHotelsWithRooms = async function (req, res){
    const userId = req.params.userId;
    const user = await userCollection.findById(userId);

    if(user.role === role.Admin){
        try {
            const hotels = await hotelCollection.find({});
            if(hotels){
                res.status(200).json({
                    hotels
                })
            } else {
                throw ("Hotels not found");
            }
        } catch (error) {
            res.status(400).json({
                "title": "Unable to read hotels",
                "detail": error
            })
        }
    } else if(user.role === role.HotelManager){
        try {  
            const hotels = await hotelCollection.find({managerId: user.name});        
            if(hotels){
                res.status(200).json({
                    hotels 
                })
            } else{
                throw ("Hotels not found");
            }
        } catch (error) {
            res.status(400).json({
                "title": "Unable to read hotels",
                "detail": error
            })
        }
    } else if(user.role === role.Guest){
        try {          
            const hotels = await hotelCollection.find({});
            if(hotels){
                let hotelsWithReservation = [];
                hotels.map((hotel) => {
                    hotel.rooms.map(room => {
                        room.reservations.map(reservation => {
                            if (reservation.guestId === user.name) {
                                hotelsWithReservation.push({"_id": hotel._id, "name": hotel.name, room});
                            }
                        })
                    })
                })
                res.status(200).json({
                    hotelsWithReservation 
                }) 
            } else {
                throw ("Hotels not found");
            }               
        } catch (error) {
            res.status(400).json({
                "title": "Unable to read hotels",
                "detail": error
            })
        }
    } else if(user.role === role.User){
        res.status(401).json({
            "title": "Not authorized"
        })
    }
}

//UPDATE list of resevations for Hotel-id -- role = HotelMangaer 

//DELETE reservations for room-id from hotel-id -- role = hotelManagermodule.exports = router;