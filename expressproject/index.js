

var express = require('express')
var mongoose = require('mongoose')

var cors = require('cors')
var morgan = require('morgan')
var cookieparser = require('cookie-parser')
var productRoutes = require('./routes/productRoutes.js')
var userRoutes = require('./routes/userRoutes.js')

var app = express()

app.use(express.json()) //core middleware (to parse the body data)
app.use(express.urlencoded()) //core middleware (to parse the body data)
app.use(express.static('public')) //core middleware (to send static assests)

app.use(cors())
app.use((morgan('tiny')))
app.use(cookieparser())
app.use('/api/product', productRoutes)
app.use('/api/user', userRoutes)

function authentication(req, res, next) {
  console.log('authentication')
  next()
}

app.use(authentication)

const ProductModal = require('./modals/productModal.js')



app.get('/', (req, res) => {
  res.send('hello express server')
})


// var dbUrl = 'mongodb://localhost:27017/Ecome-db'
var dbUrl = 'mongodb+srv://reyansoft:reyansoft123@cluster0.ahvy0mh.mongodb.net/ecom-db'


mongoose.connect(dbUrl)
.then(() => {
  console.log('DB CONNECTED SUCCESSFULLY')
}).catch((err) => {
  console.log(err, 'Error while connect with db')
})


// async function sendProduct() {
//   var newProduct = new ProductModal({
//     name: 'appple',
//     price: 200
//   })

//   // var products = await productModal.insertMany([{ name: 'laptop', price: 30000 }, { name: 'tab', price: 5000 }])
  
//   var res = await newProduct.save()
//   console.log(res)

// //   var product = new productModal({
// //     name: 'papaya',
// //     price: 300
// //   })

// //  var res = await product.save()
// //   console.log(res)
// //   console.log(product)
// //   console.log(products)

// }
// sendProduct()

// async function getProducts() {

//  var products = await productModal.find({price: {$lte: 5000}})
//  var products = await productModal.find({ price: { $nin: [300, 5000] } })
//  var products = await productModal.find({
//   $or: [
//     { price: 500 },
//     { name: "tab" }
//   ]
// })
  // var pageNumber = 1
  // var resPerPage = 2
  // var products = await productModal
  //   .find()
  //   .skip((pageNumber-1)* resPerPage)
  //   .limit(resPerPage)
    // .select({name: false})
  // .sort({price: -1})
  
    // .countDocuments()
//   console.log(products)

// }
// getProducts()

// async function getSingleProduct(id) {

//   var products = await productModal.findById({_id: id})
//   console.log(products)

// }
// getSingleProduct('69099b28200d3088b6dbad44')

// async function updateProduct(id) {

//   let product = await productModal.findById(id)
  
//   product.name = 'pen'
//   product.price = 10
//   var res = await product.save()
//   console.log(res)

  // var product = await productModal.findByIdAndUpdate(id, {
  //   $set: {
  //       name: 'tab',
  //       price: 8000
  //     }
  // }, {new: true})
  

//   console.log(product)
// }


// updateProduct('69099b28200d3088b6dbad44')

// async function deleteProduct(id) {
  // var res = await productModal.findByIdAndDelete(id)
  // var res = await productModal.deleteMany({price: false})
  // console.log(res)
// }

// deleteProduct()

app.listen(5000, () => {
  console.log('server started in port 5000')
})
