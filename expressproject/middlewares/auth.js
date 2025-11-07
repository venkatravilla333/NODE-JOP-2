
let jwt = require('jsonwebtoken');
const Usermodal = require('../modals/userModal');

async function authentication(req, res, next) {

  var token = req.header('token')
  console.log(token)
  if (!token) {
      return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

  var decode = jwt.verify(token, 'secret')
  console.log(decode)

  var user = await Usermodal.findById(decode.id).select("-password")
  console.log(user)

  req.user = user

  next()
  
}

module.exports = authentication