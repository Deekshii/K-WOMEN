var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;

var schema = new Schema({
  
  

    studentname:  {type:String, require:true},
    fathername:  {type:String, require:true},
    mothername:  {type:String, require:true},
    student10thdetails:  {type:String, require:true},
    studentintermediatedetails:  {type:String, require:true},
    dateofbirth : {type:Date, require:true},
    joiningbranch:{type:String, require:true},
});
module.exports = mongoose.model('create', schema );
