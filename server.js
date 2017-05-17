var express    = require('express');        // call express            // define our app using express
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || '5000';
var router = express.Router();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);


app.listen(port);
console.log('Magic happens on port ' + port);
