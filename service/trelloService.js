
var issue = require("./ticketType/issue");
var bug = require("./ticketType/bug");
var task = require("./ticketType/task");

var Trello = {
  createIssue: function (title, description,callback) {issue.create(title,description,callback)},
  createBug: function (description,callback) {bug.create(description,callback)},
  createTask: function (title, description,category,callback) {task.create(title,description,category,callback)}
};

module.exports = Trello;
