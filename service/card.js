
var issue = require("./ticketType/issue");
var bug = require("./ticketType/bug");
var task = require("./ticketType/task");

var validations = {
  create: function (req, res, next) {
    if (req.body.type === "issue") issue.create(req,res,next);
    if (req.body.type === "bug") bug.create(req,res,next);
    if (req.body.type === "task") task.create(req,res,next);
  },
};

module.exports = validations;
