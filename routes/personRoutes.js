

// m GITHUB sikh rha hu 

const express = require('express') ; 
const router = express.Router() ; 

const oerson = require('./../models/oerson');

// router.get('/:worktype', async(req, res)=>{
//     const worktype = req.params.worktype ; 
//     if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter'){
//       try{
//        const response = await oerson.find({work : worktype}) ;
//        console.log('response fetched....') ; 
//        res.status(200).json(response) ;
//       }
//       catch(err){
//         res.status(404).json({error : 'Invalid worktype'}) ;
//       }
//     }
// })


router.post('/person', async (req ,res)=>{
      
    try{
 
         const data = req.body // Assuming the request body contains the person data 

// create a person document using mongoose model

      const newPerson = new oerson(data) ; 


      // save new model to the database 
      const response = await newPerson.save() ; 
      console.log("data saved ") ;
      res.status(200).json(response);

      
      }
      catch(err){
          console.log(err) ; 
          res.status(500).json({error : 'Internal Server error '})
      }


  })

  router.get('/persony', async (req ,res)=>{
    try{
       const data = await oerson.find() ;
       console.log("data fetched ") ;
       res.status(200).json(data);
  
       
    }
    catch(err){
      console.log(err) ; 
      res.status(500).json({error : 'Internal Server error '})
    }
  }) ;
  
  router.put('/person/:id' , async (req ,res)=>{
     try{
      // selecting unique item 
           const personId = req.params.id ; // Extract theid from the url parameter

           // updated person data 
        const updatePersonData = req.body ; 

        const response = await oerson.findByIdAndUpdate(personId ,updatePersonData ,{
             new : true ,
             runValidators : true ,
        });
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
            }
            res.json(response);
     }
     catch(error){
                   console.error('Error updating person:', error);
                  res.status(500).json({error : 'internal Server error '}) ; 
     }
  }) ; 

  router.delete('/person/:id' , async (req , res) =>{
    try{ 
           const personId = req.params.id ; 
           const response = await oerson.findByIdAndDelete(personId) ; 

           if(!response ){
             return res.status(404).json({error : "person not found"}) ;
           }
           console.log('data delete') ;
           //  res.status(200).json({message : "person is deleted Successfully"}) ;
           res.json({message : 'person deleted'})
    }
    catch(err){  
           // console.log(err) ; 
           console.error('error deleeting person ' , err) ;
           res.status(500).json({error: "Internal Server Error "}) ;
    }
  }) ;

  module.exports = router ; 
