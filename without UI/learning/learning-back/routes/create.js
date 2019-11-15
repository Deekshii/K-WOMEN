var express = require('express');
var router = express.Router();
var createStudent = require('../models/C-stud');
router.post('/create', function(req,res,next) {
    var createstudent = new createStudent({
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


});
  
    let promise = createstudent.save();
    promise.then(function(doc) {
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message: 'Error adding tour'})
    })
  }); 
  module.exports = router;
