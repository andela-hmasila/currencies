var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CurrencySchema = new Schema({
  country: {
    type: String,
    required: true
  },
    currency: String
});

var Currency = mongoose.model('Currency', CurrencySchema);
module.exports = { conn: Currency }
