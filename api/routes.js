'use strict';

var controller = require('./controller');
var validation = require ('../validations/validation');


const validationResultUtil = require('../validations/validationResultsUtil');

var router = (app) => {
console.log(validation())
   app.route('/')
       .post(validation(),validationResultUtil, controller.CardController);
};

module.exports = router