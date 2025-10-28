

var express = require('express')

var app = express()

app.use(express.json()) //middleware (to parse the body data)

var products = [
  { id: 1, name: 'apple', price: 200 },
  { id: 2, name: 'banana', price: 60 },
  { id: 3, name: 'grape', price: 100 },
  { id: 4, name: 'orange', price: 50},
]

app.get('/', (req, res) => {
  res.send('hello express server')
})


//api for getting all products

app.get('/api/products', (req, res) => {
  res.send(products)
})

//api for getting single product

app.get('/api/product/:id', (req, res) => {
  var product = products.find((product) => product.id === parseInt(req.params.id))
  
  if (!product) return res.send('no product found with given id')
  
  return res.send(product)
})

//api for creating product

app.post('/api/product', (req, res) => {  
  
  var newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  }

  products.push(newProduct)

  return res.send(products)
  
})

//api for updating product

app.put('/api/product/:id', (req, res) => {  
  
   var product = products.find((product) => product.id === parseInt(req.params.id))
  
  console.log(product)

  if (!product) return res.send('no product found with given id')
  
  console.log(req.body)
  
  product.name = req.body.name
  product.price = req.body.price

  return res.send(products)
  
})


//api for delete product

app.delete('/api/product/:id', (req, res) => {  
  
   var product = products.find((product) => product.id === parseInt(req.params.id))
  
  console.log(product)

  
  if (!product) return res.send('no product found with given id')
    
    var index = products.indexOf(product)
  
    products.splice(index, 1)

  return res.send(products)
  
})

app.listen(5000, () => {
  console.log('server started in port 5000')
})