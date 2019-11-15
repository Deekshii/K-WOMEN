var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;

var schema = new Schema({
    
    studentname: {type:String, require:true},
    fathername : {type:String, require:true},
    mothername : {type:String, require:true},
    studentid : {type:Number, require:true},
    studentdob : {type:Date, require:true},
    studentclass:{type:String, require:true},
    studentbranch : {type:String, require:true},
   
    studentsection: {type:String, require:true},

    studentacademicpercentage : {type:Number, require:true},
    yearofpassing : {type:Date, require:true},
    student10thpercentage : {type:Number, require:true},
    studentintermediatepercentage : {type:Number, require:true},
    studentfeedetails: { type:String, require:true}
   
});
module.exports = mongoose.model('create', schema );
