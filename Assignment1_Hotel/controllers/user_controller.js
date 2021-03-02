const userCollection = require('../models/user'); 




// GET all users 
module.exports.getAllUsers = async function (req, res ) {
    const users = await userCollection.find({})
        .catch(reason => 
            res.status(400).json({
                "title": "Unable to read users from the database",
                "detail": reason
            })
        );
    res.status(200).json({
        users
    }) 
}; 

// Get specific user from user-id
module.exports.getUser = async function (req, res){
    try{
        const user = await userCollection.findById(req.params.id); 
        if(user){
            res.status(200).json({
                user
            })
        } else {
            throw ("User not found");
        }
    } catch (err) {
        res.status(400).json({
            "title": "Unable to read user from the database",
            "detail": err
        })
    }; 
}


//UPDATE/PUT upgrade User to hotelMangaer by user-id

// 

//- Create user
//Delete User 

