var express = require('express');
var router = express.Router();
var createAdmission = require('../models/C-stud');
router.post('/create', function(req,res,next) {
    var createadmission = new createAdmission({
      studentname:  req.body.studentname,
    fathername:  req.body.fathername,
    mothername:   req.body. mothername,
    student10thdetails:   req.body.student10thdetails,
    studentintermediatedetails:  req.body.studentintermediatedetails,
    dateofbirth : req.body.dateofbirth,
    joiningbranch: req.body.joiningbranch,
});
  
    let promise = createadmission.save();
    promise.then(function(doc) {
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message: 'Error adding tour'})
    })
  }); 
  module.exports = router;
