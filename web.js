var http  = require('http');
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var uristring = 
  process.env.MONGOLAB_URI || 
  'mongodb://localhost/api-counter';
var theport = process.env.PORT || 5000;
mongoose.connect(uristring);
app.configure(function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
});
require('./routes/routes')(app);
app.listen(theport);
exports = module.exports = app;
