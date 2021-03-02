const mongoose = require('mongoose');

let dbUrl = 'mongodb+srv://randi-user:AUSWkode2021@teamabecluster.gk0mk.mongodb.net/hotelFour?retryWrites=true&w=majority'
//let dbUrl = 'mongodb://localhost:27017/HotelFour';

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

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbUrl}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// For nodemon restarts                                 
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
