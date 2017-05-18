var express    = require('express');        // call express            // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Currency = require('./app/models/currency');
var db = require('./app/config');
var routes = require('./app/routes');

var app = express();
var port = process.env.PORT || '5000';
console.log('>>>>>>>>>>', db.url);
mongoose.connect(db.url, function(err){
  if(err){
    console.log('Error>>>>>>>>', err);
  }
  console.log('connected successfully');
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;
