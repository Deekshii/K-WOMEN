var express = require('express');
var router = express.Router();

var Searchbyid = require('../models/C-stud');






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

    Searchbyid.find({'studentid':req.body.studentid},function(err,response){

        if(err)
        {
            res.send({'msg':'Failed'})
        }
        else
        {
            res.json({'msg':response})
        }

    })

})
module.exports = router;