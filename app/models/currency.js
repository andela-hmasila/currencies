var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CurrencySchema = new Schema({
  country: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
    currency: String
});

module.exports = mongoose.model('Currency', CurrencySchema);
