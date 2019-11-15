
var express = require('express');
var router = express.Router();

var ReadAddmission = require('../models/C-stud');

router.put('/edit', (req, res) => {
    console.log(req.body)  
      if (!req.body._id){
        return res.status(400).send(`No record with given id : ${req.body._id}`);
      }
       var data=new  ReadAddmission()
        var data = {
          studentname:  req.body.studentname,
          fathername:  req.body.fathername,
          mothername:   req.body. mothername,
          student10thdetails:   req.body.student10thdetails,
          studentintermediatedetails:  req.body.studentintermediatedetails,
          dateofbirth : req.body.dateofbirth,
          joiningbranch: req.body.joiningbranch,
        };       
        ReadAddmission.updateOne({"_id":req.body._id}, { $set: data }, { new: true }, (err, doc) => {
            if (!err)
            { res.send(doc);
                console.log(doc) 
            }
            else { console.log('Error in tour Update :' + JSON.stringify(err, undefined, 2)); }
        });   
});


module.exports = router;

