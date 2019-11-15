var express = require('express');
var router = express.Router();
var createAdmission = require('../models/C-stud');
var ReadAdmission = require('../models/C-stud');
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

  router.put('/edit', (req, res) => {
    console.log(req.body)  
      if (!req.body._id){
        return res.status(400).send(`No record with given id : ${req.body._id}`);
      }
       var data=new  ReadAdmission()
        var data = {
          studentname:  req.body.studentname,
          fathername:  req.body.fathername,
          mothername:   req.body. mothername,
          student10thdetails:   req.body.student10thdetails,
          studentintermediatedetails:  req.body.studentintermediatedetails,
          dateofbirth : req.body.dateofbirth,
          joiningbranch: req.body.joiningbranch,
        };       
        ReadAdmission.updateOne({"_id":req.body._id}, { $set: data }, { new: true }, (err, doc) => {
            if (!err)
            { res.send(doc);
                console.log(doc) 
            }
            else { console.log('Error in tour Update :' + JSON.stringify(err, undefined, 2)); }
        });   
});

router.get('/read', function (req, res) {
  // find is used to retrieve data from db
  ReadAdmission.find(function (err, result) {
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
        ReadAdmission.findByIdAndRemove(req.query._id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});



module.exports = router;


