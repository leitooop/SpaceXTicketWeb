"use strict";
var TrelloService = require('../service/trelloService')


var controllers = {
  CardController: function (req, res, next) {
    if (req.body.type === "issue") {
      TrelloService.createIssue(req.body.title, req.body.description, function (
        error,
        response
      ) {

        if (!error) {
          res.status(201).send(response);
        } else {
          res.status(500).send(error);
        }
      });
    }
    if (req.body.type === "task") {
      TrelloService.createTask(
        req.body.title,
        req.body.description,
        req.body.category,
        function (error, response) {
          if (!error) {
            res.status(201).send(response);
          } else {
            res.status(500).send(error);
          }
        }
      );
    }
    if (req.body.type === "bug") {
      TrelloService.createBug(req.body.description, function (error, response) {
        console.log(error)
        console.log(response)
        if (!error) {
          res.status(201).send(response);
        } else {
          res.status(500).send(error);
        }
      });
    }
  },
};

module.exports = controllers;
