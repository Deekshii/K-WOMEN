var express = require('express');
var router = express.Router();
var ReadStudent = require('../models/C-stud');
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


