var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;

var schema = new Schema({
  
    price:{type:Number, require:true},
    itemname : {type:String, require:true},
   
});
module.exports = mongoose.model('create', schema );
