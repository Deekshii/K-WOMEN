var express = require('express');
var router = express.Router();

var createFaculty = require('../models/C-stud');
var ReadFaculty = require('../models/C-stud');
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


  router.put('/edit', (req, res) => {
    console.log(req.body)  
      if (!req.body._id){
        return res.status(400).send(`No record with given id : ${req.body._id}`);
      }
       var data=new  ReadFaculty()
        var data = {
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
        };       
        ReadFaculty.updateOne({"_id":req.body._id}, { $set: data }, { new: true }, (err, doc) => {
            if (!err)
            { res.send(doc);
                console.log(doc) 
            }
            else { console.log('Error in tour Update :' + JSON.stringify(err, undefined, 2)); }
        });   
});



router.get('/read', function (req, res) {
    // find is used to retrieve data from db
    ReadFaculty.find(function (err, result) {
        if (err) {
            res.send('Failed to fetch data');
        }
        else {
            result =
                res.json(result);
        }
    })
    console.log("reached get api");
})
  


router.delete('/del', (req, res) => {
    // console.log(req)
      if (!req.query._id)
          return res.status(400).send(`No record with given id : ${req.query._id}`);
          ReadFaculty.findByIdAndRemove(req.query._id, (err, doc) => {
          if (!err) { res.send(doc); }
          else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
      });
  });







  module.exports = router;
