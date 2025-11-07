var mongoose = require('mongoose')

var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    set: v => v.toLowerCase(),
    validate: {
      validator: async(name) => {
        var userExist = await ProductModal.findOne({ name: name })
        return !userExist
      },
      message: 'User already exist'
    }
    // minLength: 3,
    // maxLength: 8,
    // trim: true,
    // lowercase: true
    // uppercase: true,
    // unique: true
    
  },
  // category: {
  //   type: String,
  //   enum: ['electronics', 'mobiles', 'cloths']
  // },
  price: {
    type: Number,
    validate: {
      validator: (value) => {
        return value > 1000
      },
      message: 'Price must be morethan 1000'
   }
    // required: true,
    // default: 1000,
    // min: 0,
    // max: 80000
    
   
    // get: (value) => value.toFixed(2)  // e.g., 99 becomes "99.00"
  }
}
//  { toJSON: { getters: true } }
  , {timestamps: true})

var ProductModal = mongoose.model('product', productSchema)

module.exports = ProductModal