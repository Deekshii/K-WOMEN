var express = require('express');
var router = express.Router();
var createFaculty = require('../models/C-stud');
router.post('/create', function(req,res,next) {
    var createfaculty = new createFaculty({
      email: req.body. email,
      phonenumber: req.body.  phonenumber,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dateofbirth:  req.body.dateofbirth,
      address: req.body.address,
      age: req.body.age,
      speciliazedin: req.body.speciliazedin,
      department: req.body.department,
      dateofjoining:  req.body.dateofjoining,
      gender: req.body.gender,
      collegename : req.body.collegename ,
});
  
    let promise = createfaculty.save();
    promise.then(function(doc) {
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message: 'Error adding tour'})
    })
  }); 
  module.exports = router;
