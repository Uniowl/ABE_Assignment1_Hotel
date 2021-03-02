const userCollection = require('../models/user'); 


// GET all users 
module.exports.getAllUsers = async function (req, res ) {
    try {
        const users = await userCollection.find({}); 
        if(users){
            res.status(200).json({users})
        } else {
            throw ("Users not found"); 
        }
    } catch (error) {
        res.status(400).json({
            "title": "Unable to read users from the database",
            "detail": error
        })
    }
}; 

// Get specific user from user-id
module.exports.getUser = async function (req, res){
    try{
        const user = await userCollection.findById(req.params.userId); 
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

