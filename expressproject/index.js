

var express = require('express')
var mongoose = require('mongoose')

var cors = require('cors')
var morgan = require('morgan')
var cookieparser = require('cookie-parser')
var productRoutes = require('./routes/productRoutes.js')

var app = express()

app.use(express.json()) //core middleware (to parse the body data)
app.use(express.urlencoded()) //core middleware (to parse the body data)
app.use(express.static('public')) //core middleware (to send static assests)

app.use(cors())
app.use((morgan('tiny')))
app.use(cookieparser())
app.use('/api/product', productRoutes)

function authentication(req, res, next) {
  console.log('authentication')
  next()
}

app.use(authentication)

var productModal = require('./modals/productModal.js')



app.get('/', (req, res) => {
  res.send('hello express server')
})


var dbUrl = 'mongodb://localhost:27017/Ecom-db'

mongoose.connect(dbUrl)
.then(() => {
  console.log('DB CONNECTED SUCCESSFULLY')
}).catch((err) => {
  console.log(err, 'Error while connect with db')
})


async function sendProduct() {
  var newProduct = {
    name: 'banana',
    price: 100
  }

  var product = await productModal.create(newProduct)
  console.log(product)

}
sendProduct()

async function getProducts() {

  var products = await productModal.find()
  console.log(products)

}
getProducts()

app.listen(5000, () => {
  console.log('server started in port 5000')
})
