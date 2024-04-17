

const mongoose = require('mongoose') ; 

const MenuItemSchema = new mongoose.Schema({
    name : {
        type : String , 
    required : true ,
    },

    price : {
        type : String , 
        required : true ,

    }, 

    taste: {
        type : String ,
        enum : ["sweet", "spicy" , "sour"], 

    },

    // is_drink : {
    //     type : Boolean  ,
    //     default : false  ,
    // } ,

    // ingredients : {
    //     type : [String] , 
    //     default : []
        
    // }, 

    // num_Sales : {
    //     type : Number , 
    //      default : 0 ,
    // }

}) ;

const MenuItem = mongoose.model('MenuItem' , MenuItemSchema ) ; 
module.exports = MenuItem ;


