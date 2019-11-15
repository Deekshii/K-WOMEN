var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;

var schema = new Schema({
    email : {type:String, require:true},
    phonenumber : {type:Number, require:true},
    firstname: {type:String, require:true},
    lastname:{type:String, require:true},
    dateofbirth : {type:Date, require:true},
    age:{type:Number, require:true},
    address:{type:String, require:true},
    speciliazedin : {type:String, require:true},
    department : {type:String, require:true},
    dateofjoining : {type:Date, require:true},
gender : {type:String, require:true},
    collegename :{type:String, require:true},
   
});
module.exports = mongoose.model('create', schema );
