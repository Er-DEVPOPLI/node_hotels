 

 // file resposnsible for making connection between node js server & database server 

 const mongoose = require('mongoose') ; 
 require('dotenv').config() ; 
 // define the mongodb connection URL
 

//  // Setr up mongodb URL 
//  mongoose.connect(mongoURL ,  {
//     useNewUrlParser : true ,
//     useUnifiedTopology : true 

//  }) ; 

 // const mongoURL = 'mongodb://localhost:27017/hotels';
 // const mongoURL ="mongodb://127.0.0.1:27017/YMCA" ; 

//  const mongoURL ="mongodb+srv://Dev:poplidev123@cluster0.jhdd2oj.mongodb.net/" ;
 const mongoURL = process.env.MONGODB_URL ;
 // const mongoURL_local = process.env.MONGODB_URL_lOCAL ;


// Set up MongoDB URL 
const config = {
   autoIndex: false,
    // useNewUrlParser: true,
 };
 // return mongoose.connect(mongoURL, config);

 mongoose.connect(mongoURL);




 var db = mongoose.connection ; // object maintained by mongoose for connection Establishment

// console.log(db);

 // Event Listener 
 db.on('connected', ()=>{
    console.log('Connected to MongoDB server '); 
     
 });

 db.on('disconnected', ()=>{
    console.log('DisConnected to MongoDB server '); 
     
 }); 

 db.on('error', (err)=>{
    console.log('MongoDB connection error  : ' , err); 
     
 }) ; 

// Export the database Connection 
module.exports = db ; 