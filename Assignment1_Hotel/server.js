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

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbUrl}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

main()
