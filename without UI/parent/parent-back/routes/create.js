var express = require('express');
var router = express.Router();
var createStudent = require('../models/C-stud');
router.post('/create', function(req,res,next) {
    var createstudent = new createStudent({
      studentname: req.body. studentname,
      fathername:  req.body. fathername,
      studentid:  req.body.   studentid,
      studentclass: req.body.  studentclass,
      studentbranch: req.body. studentbranch,
      studentsection: req.body. studentsection,
     
      studentacademicpercentage: req.body.studentacademicpercentage,
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
