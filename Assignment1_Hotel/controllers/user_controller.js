const role = require('../helpers/role');
const userCollection = require('../models/user'); 
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Randis inspiration udover slides: https://holycoders.com/node-js-bcrypt-authentication/

//register - OBS: mangler at generere jwt 
module.exports.register = async function(req, res){
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const user = await userCollection.create({
            name: req.body.name,
            password: hashedPassword,
            email: `${req.body.name}@hotelfour.dk`
        });
        res.send(user);
    } catch (error) {
        res.status(400).json({
            "title": "Unable to create student record",
            "detail": error
        })
    }
}

//login - OBS: Den står og kører evigt efter linje 46: "res.status(200);"
const jwt = require('jsonwebtoken');
module.exports.login = async function(req, res) {
    try {
        const user = await userCollection.findOne({name: req.body.name});
        console.log(user);
        if(user){
            const compareResult = bcrypt.compare(req.body.password, user.password);
            if(compareResult){
                const token = jwt.sign({
                    //sub: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    exp: parseInt(Date.now() / 1000) //unix time in seconds
                }, 
                    "secret"
                    //process.env.JWT_SECRET
                );
                res.send({token});
            } else {
                res.status(401).json({
                    message: "wrong username or password"
                })
            }
        } else {
            res.status(401).json({
                message: "wrong username or password"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Unknown server error"
        })
    }
}

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

