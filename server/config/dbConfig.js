const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)

const db = mongoose.connection;
//one  of the ways to implement is to:
// promise.then as this returns a promise 
// other is to use eventListener
db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , (err)=>{
    console.log('Mongo DB Connection Failed');
})

module.exports = db;