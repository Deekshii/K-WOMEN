var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;

var schema = new Schema({
    booksavailable: {type:String, require:true},
    studentname : {type:String, require:true},
    dateofissue: {type:Date, require:true},
    subjectname:{type:String, require:true},
    studentemail : {type:String, require:true},
    studentclass:{type:String, require:true},
    studentbranch:{type:String, require:true},
    studentsection : {type:String, require:true},
    
   
   
});
module.exports = mongoose.model('create', schema );
