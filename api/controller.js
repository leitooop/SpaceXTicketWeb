"use strict";

var Trello = require("../service/trelloService");

var controllers = {
  CardController: function (req, res, next) {
    if (req.body.type === "issue") {
      Trello.createIssue(req.body.title, req.body.description, function (
        error,
        response
      ) {

        if (!error) {
          res.status(201).send(response);
        } else {
          res.status(400).send(error);
        }
      });
    }
    if (req.body.type === "task") {
      Trello.createTask(
        req.body.title,
        req.body.description,
        req.body.category,
        function (error, response) {

          if (!error) {
            res.status(201).send(response);
          } else {
            res.status(400).send(error);
          }
        }
      );
    }
    if (req.body.type === "bug") {
      Trello.createBug(req.body.description, function (error, response) {

        if (!error) {
          res.status(201).send(response);
        } else {
          res.status(400).send(error);
        }
      });
    }
  },
};

module.exports = controllers;
