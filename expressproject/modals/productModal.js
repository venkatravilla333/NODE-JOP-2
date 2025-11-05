var mongoose = require('mongoose')

var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 8,
    trim: true,
    // lowercase: true
    // uppercase: true,
    unique: true
    
  },
  price: {
    type: Number,
    required: true,
    default: 1000
  }
}, {timestamps: true})

var ProductModal = mongoose.model('product', productSchema)

module.exports = ProductModal