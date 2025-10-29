

var express = require('express')

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



app.get('/', (req, res) => {
  res.send('hello express server')
})




app.listen(5000, () => {
  console.log('server started in port 5000')
})