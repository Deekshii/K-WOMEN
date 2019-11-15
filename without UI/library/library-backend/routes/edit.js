
var express = require('express');
var router = express.Router();

var ReadLibrary = require('../models/C-stud');

router.put('/edit', (req, res) => {
    console.log(req.body)  
      if (!req.body._id){
        return res.status(400).send(`No record with given id : ${req.body._id}`);
      }
       var data=new  ReadLibrary()
        var data = {
          booksavailable: req.body. booksavailable,
          studentname: req.body. studentname,
          dateofissue: req.body.dateofissue,
          subjectname: req.body.subjectname,
        studentemail : req.body.studentemail,
        studentclass:  req.body.studentclass,
        studentbranch: req.body.studentbranch,
        studentsection: req.body.studentsection,
        };       
        ReadLibrary.updateOne({"_id":req.body._id}, { $set: data }, { new: true }, (err, doc) => {
            if (!err)
            { res.send(doc);
                console.log(doc) 
            }
            else { console.log('Error in tour Update :' + JSON.stringify(err, undefined, 2)); }
        });   
});


module.exports = router;

