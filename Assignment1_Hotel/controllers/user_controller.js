const role = require('../helpers/role');
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
module.exports.upgradeUser = async function (req, res){
    const userId = req.params.userId; 
    const currentUser = await userCollection.findById(userId); 
    if(currentUser.role === role.Admin){
        let userToChange = await userCollection.findByIdAndUpdate(req.params.userToChangeId,{
            role: req.body.role
        },{
            new: true
        })
        if(userToChange){
            res.status(200).json({
                userToChange
            })
        }else {
            res.status(500).json({
                "title":"Unknown server error"
            })
        };
    } else {
        res.status(401).json({
            "title": "User not authorized - no admin rights"
        })
    }
}





//- Create user
//Delete User 

