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
}
