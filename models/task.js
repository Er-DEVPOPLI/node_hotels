

const mongoose = require("mongoose") ; 

const taskSchema = mongoose.Schema({

    title : {
        type : String , 
        
    } , 
    
    
    description: {
        type : String , 
        
        
    } , 
    priority : {
            type : Number ,
            // enum : [1,2,3]  
           
    } ,

   dueDate: {
         type : Date , 
         

   } ,
     

}) ;

const task = mongoose.model('taskFill' ,taskSchema) ;
module.exports = task ; 
