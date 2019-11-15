var express = require('express');
var router = express.Router();
var createLibrary = require('../models/C-stud');
router.post('/create', function(req,res,next) {
    var createlibrary = new createLibrary({
      booksavailable: req.body.booksavailable,
      studentname: req.body.studentname,
      dateofissue: req.body.dateofissue,
      subjectname: req.body.subjectname,
    studentemail : req.body.studentemail,
    studentclass:  req.body.studentclass,
    studentbranch: req.body.studentbranch,
    studentsection: req.body.studentsection,
    
     
});
  
    let promise = createlibrary.save();
    promise.then(function(doc) {
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message: 'Error adding tour'})
    })
  }); 
  module.exports = router;
