


const express = require('express');
const app = express() ; 
const db = require('./db') ; 
const oerson = require('./models/oerson');
// const Person = require('./models/oerson') ;
const bodyParser = require('body-parser'); 

 const MenuItem = require('./models/MenuItem');
const task = require('./models/task') ;

app.use(bodyParser.json());
require('dotenv').config() ; 

 // const Person = required('./models/person');


//********************************************************* */

// app.post('/oerson', (req, err)=>{
//  constnewPerson = req.body // Assuming the request body contains the person data 

//       // const newPerson = new oerson() ; 
//       // newPerson.age = data.name ; 
//       // newPerson.mobile = data.mobile ;

//       const newPerson = new oerson(data) ; 
//       newPerson.save((error , savedPerson)=>{
//                 if(error){
// console.log("Error saving person : " , error ) ;
// res.status(500).json({eror : "Internal server error"})
//                 }
//                 else{
//                   console.log("data saved successfully ") ;
//                   res.status(200).json(savedPerson) ;
//                 }
 //********************************************************************************* */     

  

 
app.post('/api/tasks', async(req, res )=>{
  try{
      const data = req.body ;
      const taskassign = new task(data) ;
      const reponse = await taskassign.save() ; 
      console.log("your task is saved Successfully")
      res.status(200).json(response) ;

  }
  catch(err){
        console.log(err) ;
        res.status(500).json({error : 'task is not filled as some error in it '}) ;
  }
})
  

// }) ;

// })



app.get('/api/tasks', async(req, res)=>{
  try{
      const data = await task.find() ; 
      console.log('list of task is fetched successfully ') ; 
      res.status(200).json(data) ;
  }
  catch(err){
         console.log(err) ; 
         res.status(500).json({error : 'Inter nal Server error '})  ;
}

}) ; 


 

app.get('/person/:workt' , async (req , res) =>{
   const work = req.params.workt  ; 
   if(work == 'chef'){
    try{
      const response = await oerson.find({work :  work}); 
      console.log('respnse mil gya h ') ; 
        res.status(200).json(response) ; 
    }
    catch(err){
      res.status(404).json({error : "Are bhai error h tere code m "})
    }
   }
});


app.get('/', (req, res) =>{
  res.send('Hello World , Code is wriiten by dev Popli');
}); 

app.get('/taskk' , async(req , res)=>{
  try{
        const data = req.body ; 
        console.log("task data is fetched ") ; 
        res.status(200).json(data) ; 

  }
  catch(err){
        console.log(err) ; 
        res.status(500).json({error : 'Internal Error '}) ; 

  }
}) ; 


const personRoutes = require('./routes/personRoutes') ;
const menuItemRoutes = require('./routes/menuRoutes') ; 
 


 app.use('/' , personRoutes) ; 
app.use('/' ,menuItemRoutes ) ;

const PORT = process.env.PORT || 3000 ; 

app.listen(PORT , ()=> {
    console.log("Server is running on port 412 ") ; 
}) ; 


