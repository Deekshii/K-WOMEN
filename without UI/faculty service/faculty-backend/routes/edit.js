
var express = require('express');
var router = express.Router();

var ReadFaculty = require('../models/C-stud');

router.put('/edit', (req, res) => {
    console.log(req.body)  
      if (!req.body._id){
        return res.status(400).send(`No record with given id : ${req.body._id}`);
      }
       var data=new  ReadFaculty()
        var data = {
            email: req.body. email,
            phonenumber: req.body.  phonenumber,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dateofbirth:  req.body.dateofbirth,
           address: req.body.address,
         age: req.body.age,
         speciliazedin: req.body.speciliazedin,
         department: req.body.department,
         dateofjoining:  req.body.dateofjoining,
         gender: req.body.gender,
         collegename : req.body.collegename ,
        };       
        ReadFaculty.updateOne({"_id":req.body._id}, { $set: data }, { new: true }, (err, doc) => {
            if (!err)
            { res.send(doc);
                console.log(doc) 
            }
            else { console.log('Error in tour Update :' + JSON.stringify(err, undefined, 2)); }
        });   
});


module.exports = router;

