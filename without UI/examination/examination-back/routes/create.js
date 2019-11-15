var express = require('express');
var router = express.Router();
var createPlacement = require('../models/C-stud');
router.post('/create', function(req,res,next) {
    var createplacement = new createPlacement({
      studentname: req.body. studentname,
      studentclass: req.body.  studentclass,
      studentbranch: req.body. studentbranch,
      studentsection: req.body. studentsection,
      studentid:  req.body.   studentid,
      studentacademicpercentage: req.body.studentacademicpercentage,

      examstimetable: req.body.examstimetable,

});
  
    let promise = createplacement.save();
    promise.then(function(doc) {
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message: 'Error adding tour'})
    })
  }); 
  module.exports = router;
