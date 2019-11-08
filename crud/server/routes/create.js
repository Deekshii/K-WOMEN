
var express = require('express');
var router = express.Router();


var createStudent = require('../models/C-stud');
// importing bcrypt 
var bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/create', function(req,res,next) {
    var data = new createStudent({
      //id: req.body. id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
     address: req.body.address,
   user_id: req.body.user_id,
    email: req.body.email,
    password: req.body.password,
  class:req.body.class
});
// encrypting our password
bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
  // Store hash in your password DB.
  // assigning encrypted password to our model
  data.password = hash;

  // data.save function is used to store our data in db
    data.save(function(err,result){
      if(err)
      {
          res.json({'msg':'Failed to Insert data'})
      }
      else
      {

     

           res.send({'msg':'Success'});
      }
  })
 
});
 
})


// post api for checking login functionality
router.post('/login',function(req,res){
    
  // mySchema is model of your db
  // find is used to retrieve data from db
  // we are passing email to our find method to fetch the information
  console.log(req.body.email)
  createStudent.find({'email':req.body.email},function(err,result){
    console.log(req.body.email)
      if(err)
      {
          res.json({'msg':'Failed to fetch data'});
      }
      else
      {
          // checking condition if we get user data
          if(result.length > 0)
          {
             
              // comparing the user entered password and encrypted password from database
              // result[0].password is encrypted password from database
              bcrypt.compare(req.body.password,result[0].password , function(err, data) {
                  // data == true
                  // checking for matching the password if data == true our password is matched
                  if(data == true)
                  {
                      res.json({'msg':'Success','response' : result})
                  }
                  else
                  {
                      res.json({'msg':'Invalid password'});
                  }
              });
          }
          else
          {
              res.json({'msg':'User not found'});
          }
      }
  })
})

  module.exports = router;