


const mongoose = require('mongoose') ; 
// schema or model

const personSchema = new mongoose.Schema({
   
    name : {
        type : String ,
        reqiuired : true 
    }, 

    age: {
        type : Number , 
    } ,

    work  : {
        type : String ,
        enum : ['chef' , 'waiter' , 'manager'], 
         required : true 
    } , 

    mobile : {
    type : String , 
    required : true 
    }, 

    email : {
        type : String ,
        required : true ,
        unique : true 
    },
    address : {
        type : String ,
    }, 

    salary : {
        type : Number ,
        required : true 
    }, 

}); 

 // Create person model 
 const oerson = mongoose.model('oerson', personSchema) ;
 module.exports = oerson ; 
 