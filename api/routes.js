'use strict';

var controller = require('./controller');
var validation = require ('../validations/validation');


const validationResultUtil = require('../utils/validationResultsUtil');

var router = (app) => {
console.log(validation())
   app.route('/api/v1/cards')
       .post(validation(),validationResultUtil, controller.CardController);
};

module.exports = router