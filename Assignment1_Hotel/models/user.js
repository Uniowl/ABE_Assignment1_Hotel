const { GridFSBucketReadStream } = require('mongodb');
const mongoose = require('mongoose'); 
//const Roles = require('../helpers/role'); 

const userSchema = new mongoose.Schema({
    id: String,
    role: String
}); 

const User = mongoose.model('User',userSchema);
module.exports = User

