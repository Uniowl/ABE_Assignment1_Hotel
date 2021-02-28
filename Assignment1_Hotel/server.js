const mongoose = require('mongoose');

let dbUrl = 'mongodb://localhost:27017/HotelFour';

if (process.env.NODE_ENV === 'production') {
    dbUrl = process.env.MONGODB_URI;
}

async function main() {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (error) {
        console.log(error)
    }
}

main()
//test
