var mongoose = require('mongoose')

var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {timeStamps: true})

var ProductModal = mongoose.model('product', productSchema)

module.exports = ProductModal