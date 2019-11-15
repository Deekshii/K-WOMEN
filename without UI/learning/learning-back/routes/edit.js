
var express = require('express');
var router = express.Router();

var ReadStudent = require('../models/C-stud');

router.put('/edit', (req, res) => {
    console.log(req.body)  
      if (!req.body._id){
        return res.status(400).send(`No record with given id : ${req.body._id}`);
      }
       var data=new  ReadStudent()
        var data = {
          studentname: req.body. studentname,
      fathername:  req.body. fathername,
      mothername:  req.body. mothername,
      studentid:  req.body.   studentid,
      studentdob:  req.body. studentdob,
      studentclass: req.body.  studentclass,
      studentbranch: req.body. studentbranch,
      studentsection: req.body. studentsection,
     
      studentacademicpercentage: req.body.studentacademicpercentage,
      yearofpassing:  req.body. yearofpassing,
      student10thpercentage:  req.body. student10thpercentage,
      studentintermediatepercentage:  req.body. studentintermediatepercentage,
      studentfeedetails: req.body.studentfeedetails,

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

