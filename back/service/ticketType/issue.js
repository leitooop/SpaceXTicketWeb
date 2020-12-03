var Trello = require("trello");

var trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_TOKEN);

var issue = {
  create: function (title, description, callback) {
  try {
    
  
    trello.addCard(title, description, process.env.LIST_ID, callback );
  } catch (error) {
    callback(error,['Something Broke'])
  }},
};
module.exports = issue;
