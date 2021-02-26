const mongoose = require('mongoose');
let dbUrl = 'mongodb://localhost:27017/HotelFour';
if (process.env.NODE_ENV === 'production') {
    dbUrl = process.env.MONGODB_URI;
}

