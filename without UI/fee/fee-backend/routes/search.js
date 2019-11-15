
var express = require('express');
var router = express.Router();

var Searchbyid = require('../models/C-stud');

let k 




// router.post('/search',function(req,res,next){

//     Searchbyid.find({'studentid': {$eq: req.body.studentid}},function(err,response){


//         if(err)
//         {
//             res.send({'msg':'Failed'})
//         }
//         else
//         {
//             res.json({'msg':response})
//         }
 
//     })

// })



router.post('/search',function(req,res,next){
    // find( { students: { $elemMatch: { name: $name } } )
    console.log(req.body.studentbranch);
  var k =   req.body.studentbranch ;
    Searchbyid.find( { studentbranch: new RegExp(k) },function(err,response){

//    Searchbyid.find({'studentid':req.body.studentid},function(err,response){

        if(err) 
        {
            res.send({'msg':'Failed'})
        }
        else
        {
            res.json({'msg':response})
        }

   

});
})
module.exports = router;