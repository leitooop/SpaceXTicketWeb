var Trello = require("trello");
var trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_TOKEN);

var task = {
  create: function (title, description,category, callback) {
    async function AssingLabelToCard(TrelloCard, category, callback) {
      var labelID = undefined;
      switch (category) {
        case "maintenance":
          labelID = process.env.MAINTENANCE_LABEL_ID;
          break;
        case "research":
          labelID = process.env.RESEARCH_LABEL_ID;
          break;
        case "test":
          labelID = process.env.TEST_LABEL_ID;
          break;
        default:
          break;
      }
      trello.addLabelToCard(TrelloCard.id, labelID, callback);
    }
    trello.addCard(
      title,
      description,
      process.env.LIST_ID,
      function (error, trelloCard) {
        if (!error) {
          AssingLabelToCard(trelloCard, category, callback);
        } else {
          callback(error, trelloCard)
        }
      }
    );
  },
};

module.exports = task;
