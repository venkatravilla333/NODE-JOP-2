
var express = require('express')

var router = express.Router()

var products = [
  { id: 1, name: 'apple', price: 200 },
  { id: 2, name: 'banana', price: 60 },
  { id: 3, name: 'grape', price: 100 },
  { id: 4, name: 'orange', price: 50},
]

//api for getting all products

router.get('/', (req, res) => {
  res.send(products)
})

//api for getting single product

router.get('/:id', (req, res) => {
  var product = products.find((product) => product.id === parseInt(req.params.id))
  
  if (!product) return res.send('no product found with given id')
  
  return res.send(product)
})

//api for creating product

router.post('/', (req, res) => {  
  console.log(req.body)
  var newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  }

  products.push(newProduct)

  return res.send(products)
  
})

//api for updating product

router.put('/:id', (req, res) => {  
  
   var product = products.find((product) => product.id === parseInt(req.params.id))
  
  console.log(product)

  if (!product) return res.send('no product found with given id')
  
  console.log(req.body)
  
  product.name = req.body.name
  product.price = req.body.price

  return res.send(products)
  
})


//api for delete product

router.delete('/:id', (req, res) => {  
  
   var product = products.find((product) => product.id === parseInt(req.params.id))
  
  console.log(product)

  
  if (!product) return res.send('no product found with given id')
    
    var index = products.indexOf(product)
  
    products.splice(index, 1)

  return res.send(products)
  
})

module.exports = router