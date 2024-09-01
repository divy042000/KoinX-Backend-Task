const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  price: Number,
});

const Price = mongoose.model('Price', priceSchema);

module.exports = Price;