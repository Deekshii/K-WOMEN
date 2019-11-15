var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;

var schema = new Schema({
    name: {type:String, require:true},
    class: {type:String, require:true},
    section: {type:String, require:true},
    branch: {type:String, require:true},
    totalpercent: {type:Number, require:true},
    collegename :{type:String, require:true}, 
   
});
module.exports = mongoose.model('create', schema );
