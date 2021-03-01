const mongoose = require('mongoose');
const { User } = require('./helpers/role');
var Hotel = require('./models/hotel');
const hotels = require('./hotels'); 
let dbUrl = 'mongodb+srv://dbMads:Rf0e3duLljH7u4fH@teamabecluster.gk0mk.mongodb.net/HotelFour';
//let dbUrl = 'mongodb://localhost:27017/HotelFour';
if (process.env.NODE_ENV === 'production') {
    dbUrl = process.env.MONGODB_URI;
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


async function main(){
    try{
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }); 
    } catch (error) {
        console.log(error); 
    }

    // const db = mongoose.connection; 


    // try{
    //     let savedDocument = await Hotel.create(hotels); 
    //     console.log(savedDocument); 
    // } catch (err) {
    //     console.log(err)
    // } finally {
    //     await db.close();
    // }

 }

// main(); 