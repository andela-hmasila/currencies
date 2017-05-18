var Currency = require('./models/currency').conn;
module.exports = function(app){
  app.use(function(req, res, next) {
      // do logging
      console.log('Something is happening.');
      next(); // make sure we go to the next routes and don't stop here
  });

  // test route to make sure everything is working (accessed at GET http://localhost:5000/api)
  app.get('/', function(req, res) {
      res.json({ message: 'hooray! welcome to our api!' });
  });

  app.get('/api/currencies', function(req, res){

  });

  app.post('/api/currencies', function(req, res){
    var currency = new Currency(req.body);
    console.log(currency);

    currency.save(function(err, curr){
      if(err) {
        console.log("unsuccessful >>>>>");
        res.send(err);
      }
      console.log("successful >>>>>");
      res.send("Saved");
    });
  });
}
