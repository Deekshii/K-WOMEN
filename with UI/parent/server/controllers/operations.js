var express = require('express');
var router = express.Router();

var createStudent = require('../models/C-stud');
var ReadStudent = require('../models/C-stud');
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
  
  router.put('/edit', (req, res) => {
      console.log(req.body)  
        if (!req.body._id){
          return res.status(400).send(`No record with given id : ${req.body._id}`);
        }
         var data=new  ReadStudent()
          var data = {
            studentname: req.body. studentname,
            fathername:  req.body. fathername,
            studentid:  req.body.   studentid,
            studentclass: req.body.  studentclass,
            studentbranch: req.body. studentbranch,
            studentsection: req.body. studentsection,
           
            studentacademicpercentage: req.body.studentacademicpercentage,
            studentfeedetails: req.body.studentfeedetails,
          };       
          ReadStudent.updateOne({"_id":req.body._id}, { $set: data }, { new: true }, (err, doc) => {
              if (!err)
              { res.send(doc);
                  console.log(doc) 
              }
              else { console.log('Error in tour Update :' + JSON.stringify(err, undefined, 2)); }
          });   
  });
  
router.get('/read', function (req, res) {
  // find is used to retrieve data from db
  ReadStudent.find(function (err, result) {
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
        ReadStudent.findByIdAndRemove(req.query._id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


  




  module.exports = router;
