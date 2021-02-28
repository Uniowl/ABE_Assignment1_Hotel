const { GridFSBucketReadStream } = require('mongodb');
const mongoose = require('mongoose'); 
const Roles = require('../helpers/role'); 

const userSchema = new mongoose.Schema({
    id: Guid,
    role: any
}); 

const User = mongoose.model('User',userSchema);
module.exports = User

