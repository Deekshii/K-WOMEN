
var express = require('express');
var router = express.Router();

var ReadAttendance = require('../models/C-stud');

router.put('/edit', (req, res) => {
    console.log(req.body)  
      if (!req.body._id){
        return res.status(400).send(`No record with given id : ${req.body._id}`);
      }
       var data=new  ReadAttendance()
        var data = {
          studentname: req.body. studentname,
          studentclass: req.body.   studentclass,
          studentbranch: req.body.  studentbranch,
          studentsection: req.body. studentsection,
          studentid:  req.body.   studentid,
          sessionsattended: req.body.sessionsattended,
        };       
        ReadAttendance.updateOne({"_id":req.body._id}, { $set: data }, { new: true }, (err, doc) => {
            if (!err)
            { res.send(doc);
                console.log(doc) 
            }
            else { console.log('Error in tour Update :' + JSON.stringify(err, undefined, 2)); }
        });   
});


module.exports = router;

