
var express = require('express')
var productModal = require('../modals/productModal.js')
var router = express.Router()

// var products = [
//   { id: 1, name: 'apple', price: 200 },
//   { id: 2, name: 'banana', price: 60 },
//   { id: 3, name: 'grape', price: 100 },
//   { id: 4, name: 'orange', price: 50},
// ]

//api for getting all products

router.get('/', async(req, res) => {
  var products = await productModal.find()
  return res.send(products)
})

//api for getting single product

router.get('/:id', async(req, res) => {
  console.log(req.params.id)
  // var product = productModal.find((product) => product.id === parseInt(req.params.id))
  var product = await productModal.findById(req.params.id)
  
  if (!product) return res.send('no product found with given id')
  
  return res.json(product)
})

//api for creating product

router.post('/', async (req, res) => {  
  console.log(req.body)
  var newProduct = {
    // id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  }


   var product = await productModal.create(newProduct)
  // products.push(newProduct)

  return res.send(product)
  
})

//api for updating product

router.put('/:id', async(req, res) => {  
  
  //  var product = products.find((product) => product.id === parseInt(req.params.id))
  
  // console.log(product)

  var product = await productModal.findById(req.params.id)
  console.log(product)

  if (!product) return res.send('no product found with given id')
  
  console.log(req.body)
  
  product.name = req.body.name
  product.price = req.body.price

  var updatedproduct = await product.save()
  return res.send(updatedproduct)
  
})


//api for delete product

router.delete('/:id', async(req, res) => {  
  
  //  var product = products.find((product) => product.id === parseInt(req.params.id))
   var product = await productModal.findByIdAndDelete(req.params.id)
  
  console.log(product)

  
  if (!product) return res.send('no product found with given id')
    
    // var index = products.indexOf(product)
  
    // products.splice(index, 1)

  return res.send(product)
  
})

module.exports = router