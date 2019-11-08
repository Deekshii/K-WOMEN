var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;


var schema = new Schema({
    // id : {type:Number, require:true},
    firstname: {type:String, require:true},
    lastname:{type:String, require:true},
    user_id:{type:String, require:true},
    password:{type:String, require:true},
    email:{type:String, require:true},
    college:{type:String, require:true},
    address:{type:String, require:true}
    // creation_dt:{type:Date, require:true}
   
});

module.exports = mongoose.model('create-stud', schema );