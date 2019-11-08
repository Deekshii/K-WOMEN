var express = require('express');
var router = express.Router();

var ReadStudent = require('../models/C-stud');

router.put('/edit', (req, res) => {
    console.log(req.body)  
      if (!req.body._id){
        return res.status(400).send(`No record with given id : ${req.body._id}`);
      }
       var data=new ReadStudent()
        var data = {
        id: req.body.id,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          address: req.body.address,
          age : req.body.age,
          class: req.body.class,
          section: req.body.section
        };       
        ReadStudent.updateOne({"_id":req.body._id}, { $set: data }, { new: true }, (err, doc) => {
            if (!err)
            { res.send(doc);
                console.log(doc) 
            }
            else { console.log('Error in tour Update :' + JSON.stringify(err, undefined, 2)); }
        });   
});


module.exports = router;
