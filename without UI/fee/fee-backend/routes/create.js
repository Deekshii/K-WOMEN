var express = require('express');
var router = express.Router();
var createFee = require('../models/C-stud');
router.post('/create', function(req,res,next) {
    var createfee = new createFee({
      studentname: req.body. studentname,
      studentclass: req.body.  studentclass,
      studentbranch: req.body. studentbranch,
      studentsection: req.body. studentsection,
      studentid:  req.body.   studentid,
      studentfeedetails: req.body.  studentfeedetails,



});
  
    let promise = createfee.save();
    promise.then(function(doc) {
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message: 'Error adding details'})
    })
  }); 
  module.exports = router;
