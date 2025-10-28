

var express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.send('hello express server')
})
app.get('/products', (req, res) => {
  res.send([{name: 'apple', price: 200}, {name: 'banana', price: 60}])
})

app.listen(5000, () => {
  console.log('server started in port 5000')
})