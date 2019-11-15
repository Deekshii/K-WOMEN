var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;

var schema = new Schema({
   
      
    studentname: {type:String, require:true},
    fathername : {type:String, require:true},
    studentid : {type:Number, require:true},
    studentclass:{type:String, require:true},
    studentbranch : {type:String, require:true},
   
    studentsection: {type:String, require:true},

    studentacademicpercentage : {type:Number, require:true},
    studentfeedetails: { type:String, require:true}
});
module.exports = mongoose.model('create', schema );
