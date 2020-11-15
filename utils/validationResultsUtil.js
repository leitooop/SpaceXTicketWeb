const { validationResult } = require('express-validator');
var validationResultUtil = (req,res,next) =>{
const errors = validationResult(req)
console.log(errors)
console.log(errors.mapped())
if (!errors.isEmpty()) {
    console.log('error')
    console.log(errors.mapped());
    return res.status(400).json({ errors: errors.array() });
  }
else{
  next()
}
}

module.exports = validationResultUtil