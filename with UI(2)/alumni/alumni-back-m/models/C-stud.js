var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;
var schema = new Schema({
    email : {type:String, require:true},
    alumininame : {type:String, require:true},
    location : {type:String, require:true},
    organisationworking: {type:String, require:true},
    phonenumber:{type:Number, require:true},
   
   
});
module.exports = mongoose.model('create', schema );
