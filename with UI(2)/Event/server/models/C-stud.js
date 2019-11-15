var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  var Subscribe = mongoose.Subscribe;

var schema = new Schema({
    eventname: {type:String, require:true},
   eventdate: {type: Date, require:true},
    description: {type:String, require:true},
    location: {type:String, require:true},
});
module.exports = mongoose.model('create', schema );
