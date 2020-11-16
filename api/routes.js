'use strict';

var controller = require('./controller');
var validation = require ('../validations/validation');


const validationResultUtil = require('../validations/validationResultsUtil');

var router = (app) => {

   app.route('/')
       .post(validation(),validationResultUtil, controller.TrelloController);
};

module.exports = router