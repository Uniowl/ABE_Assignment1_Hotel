const mongoose = require('mongoose'); 

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve the list of all users
 *     description: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Alexander
 *                       role:
 *                         type: string
 *                         description: The role of the user. Can be Admin, Manager or Guest
 *                         example: Manager
 */

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    role: String
}); 

// FOR NOW THIS DOESN'T WORK:
// - - - - - - - - - - - - - - -
const jwt = require('express-jwt');
userSchema.methods.generateJwt = function (){
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        sub: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000) //unix time in seconds
    }, process.env.JWT_SECRET);
}

module.exports = mongoose.model('User', userSchema);

