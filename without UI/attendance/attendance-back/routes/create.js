var express = require('express');
var router = express.Router();
var createAttendance = require('../models/C-stud');
router.post('/create', function(req,res,next) {
    var createattendance = new createAttendance({
      studentname: req.body. studentname,
      studentclass: req.body.  studentclass,
      studentbranch: req.body. studentbranch,
      studentsection: req.body. studentsection,
      studentid:  req.body.   studentid,
      sessionsattended: req.body.sessionsattended,



});
  
    let promise = createattendance.save();
    promise.then(function(doc) {
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message: 'Error adding tour'})
    })
  }); 
  module.exports = router;
