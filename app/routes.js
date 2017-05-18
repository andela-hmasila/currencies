var Currency = require('./models/currency');
module.exports = function(app) {
  app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
  });

  // test route to make sure everything is working (accessed at GET http://localhost:5000/api)
  app.get('/', function(req, res) {
    res.json({
      message: 'hooray! welcome to our api!'
    });
  });

  // list all currencies
  app.route('/api/currencies')
    .get(function(req, res) {
      Currency.find({}, function(err, currencies) {
        if (err) {
          res.json(err)
        } else {
          res.send(currencies);
        }
      })
    })

    // create a new currency
    .post(function(req, res) {
      var currency = new Currency(req.body);

      currency.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.send({
          message: "Currency Saved Successfully"
        });
      });
    });

  app.route('/api/currencies/:id')

  // update a country
    .put(function(req, res) {
      var curr = req.body;
      Currency.findByIdAndUpdate(req.params.id, curr, function(err, currency) {
        if (err) {
          res.send(err)
        } else {
          res.send({
            message: "Updated Successfully"
          });
        }
      });
    })

    // delete a country
    .delete(function(req, res) {
      Currency.remove({
        _id: req.params.id
      }, function(err) {
        if (err) {
          res.send(err)
        } else {
          res.send({
            message: "Deleted successfully"
          })
        }
      })
    })
}
