var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var phone = require('./routes/phone');
var app = express();

var fs = require('fs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/phone', phone);
app.get("/",function (req,res){
  toSend = currentOrientation[0]+','+currentOrientation[1]+','+currentOrientation[2];
  res.send(toSend);
});
var currentOrientation = [0,0,0];
app.post('/update',function(req,res){
    var x = req.body.xOrientation;
    var y = req.body.yOrientation;
    var z = req.body.zOrientation;
    currentOrientation[0] = x;
    currentOrientation[1] = y;
    currentOrientation[2] = z;
    console.log(currentOrientation);
    res.send("200");
});


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
console.log("Server Online")

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
