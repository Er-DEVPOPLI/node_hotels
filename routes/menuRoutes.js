// comments added for testing purposes


const express = require('express') ; 
const router = express.Router() ; 
const MenuItem = require('./../models/MenuItem');

router.get('/menu' , async(req ,res)=>{
    try{
      const data = await MenuItem.find() ;
      console.log("data of menu items are fetched ") ;
      res.status(200).json(data);
    }
    catch(err){
      console.log(err) ; 
      res.status(500).json({error : 'Internal Server error so menu data can not be seen '}) ;
    }
    
  
   }) ;
   router.post('/'  , async (req ,res) =>{
    try{
        const data = req.body ; 

        const menu = new MenuItem(data) ; 
        const response  = await menu.save() ; 
        console.log("menu is saved successfuly ") ; 
        res.status(200).json(response) ;
    }
    catch(err){
          console.log(err) ; 
          res.status(500).json({error : ' can not filled the data !!!'}) ;
    }

});

router.get('/Menu/:taste' , async(req , res)=>{
  const tt = req.params.taste ; 

  if(tt == "sweet" || tt == "spicy"){
     try{
           const response = await MenuItem.find({taste : tt}) ; 
               console.log('response fetched....') ; 
                res.status(200).json(response) ;   
     } 
     catch(err){
      res.status(404).json({error : 'Invalid worktype'}) ;
     }
  }
}) ;


router.get('/Menu/:name' , async(req , res)=>{
  const tt = req.params.name ; 

  if(tt == "false" || tt == "true"){
     try{
           const response = await MenuItem.find({is_drink : tt}) ; 
               console.log('aa gya rsponse ..') ; 
                res.status(200).json(response) ;   
     } 
     catch(err){
      res.status(404).json({error : 'Invalid worktype'}) ;
     }
  }
}) ;
// router.get('/Menu/:name' , async(req, res)=>{
//     const nameid = req.params.name ; 
//       if(nameid == 'RasGulla' || nameid == "Gulab_Jamun"){
//           try{
//                  const response = await MenuItem.find({name : nameid});
//                  console.log("AApka Res[ponse mil gya h ") ; 
//                  res.status(200).json(response) ; 
//           }
//           catch(err){
//               res.status(404).json({error : "Are bhai tu apna code dekh"}); 
//           }
//       }

// } ) ;

module.exports = router ; 
