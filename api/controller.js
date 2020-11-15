'use strict';

var card = require('../service/card');


var controllers = {
   CardController: function(req, res,next) {
           card.create(req, res ,next, function(err, dist) {
               if (err)
                   res.send(err);
               res.json(dist);
           });
    },
};

module.exports = controllers;