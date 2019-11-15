



var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;

var schema = new Schema({
    examnotification: {type:String, require:true},
    e_description:{type:String, require:true},

    eventnotification: {type: String, require:true},
    description:{type:String, require:true},
   
});
module.exports = mongoose.model('create', schema );
