var Trello = require("trello");

var trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_TOKEN);

var issue = {
  create: function (title, description, callback) {
    trello.addCard(title, description, process.env.LIST_ID, callback );
  },
};
module.exports = issue;
