var express = require('express')
var Usermodal = require('../modals/userModal.js')
var router = express.Router()
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let authentication = require('../middlewares/auth.js')

router.post('/register', async (req, res) => {
  
  let salt = await bcrypt.genSalt(10)

 let hassedPassword = await bcrypt.hash(req.body.password, salt)
  console.log(salt)

  let newUser = {
      name: req.body.name,
      email: req.body.email,
      password: hassedPassword,
  }
  let user = await Usermodal.create(newUser)
  console.log(user)
  return res.send(user)
})
router.post('/login', async (req, res) => {
  try {
    var user = await Usermodal.findOne({ email: req.body.email })
    console.log(user)
    if (!user) {
      return res.status(400).send('Invalid credentials')
    }

    let ispasswordsame = await bcrypt.compare(req.body.password, user.password)

    if (!ispasswordsame) {
      return res.status(400).send('invalid credentials')
    }

    //generate jwt token

    let token = await jwt.sign({ id: user._id }, 'secret')
    console.log(token)
    return res.send({token: token})
    
  } catch (error) {
    return res.status(500).send('Internal server error')
  }

 
})

router.get('/profile', authentication, (req, res) => {
  var user = req.user
  console.log(user)
  return res.send(user)

})

module.exports = router


