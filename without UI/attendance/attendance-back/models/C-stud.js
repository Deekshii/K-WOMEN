var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;

var schema = new Schema({
    
    studentname: {type:String, require:true},
    studentclass:{type:String, require:true},
    studentbranch : {type:String, require:true},
   
    studentsection: {type:String, require:true},
    studentid : {type:String, require:true},
    sessionsattended : {type:Number, require:true},
   
});
module.exports = mongoose.model('create', schema );
