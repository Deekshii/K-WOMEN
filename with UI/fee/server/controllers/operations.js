var express = require('express');
var router = express.Router();

var createFee = require('../models/C-stud');
var ReadFee = require('../models/C-stud');
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


var ReadFee = require('../models/C-stud');
router.get('/read', function (req, res) {
    // find is used to retrieve data from db
    ReadFee.find(function (err, result) {
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
          ReadFee.findByIdAndRemove(req.query._id, (err, doc) => {
          if (!err) { res.send(doc); }
          else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
      });
  });
  router.get('/read', function (req, res) {
      // find is used to retrieve data from db
      ReadFee.find(function (err, result) {
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
            ReadFee.findByIdAndRemove(req.query._id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
        });
    });
  
  

router.put('/edit', (req, res) => {
  console.log(req.body)  
    if (!req.body._id){
      return res.status(400).send(`No record with given id : ${req.body._id}`);
    }
     var data=new  ReadFee()
      var data = {
        studentname: req.body. studentname,
        studentclass: req.body.   studentclass,
        studentbranch: req.body.  studentbranch,
        studentsection: req.body. studentsection,
        studentid:  req.body.   studentid,
        studentfeedetails: req.body.  studentfeedetails,
      };       
      ReadFee.updateOne({"_id":req.body._id}, { $set: data }, { new: true }, (err, doc) => {
          if (!err)
          { res.send(doc);
              console.log(doc) 
          }
          else { console.log('Error in tour Update :' + JSON.stringify(err, undefined, 2)); }
      });   
});

  



  module.exports = router;
