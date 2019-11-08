var express = require('express');
var path = require('path');

var createRouter = require('./routes/create');
var readRouter = require('./routes/read');
var editRouter = require('./routes/edit');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// add mongoose 
var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/training", {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
  if(error){
      console.log("Error occured not able to connect");
  }
  });


//add cors 
var cors = require('cors');
app.use(cors({
  origin:'http://localhost:4200'
}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/create', createRouter);
app.use('/read', readRouter);
app.use('/edit', editRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

//server listening
app.listen(3005, ()=> console.log("listening on port 3005"));
module.exports = app;