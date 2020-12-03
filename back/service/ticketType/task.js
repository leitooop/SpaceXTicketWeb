var Trello = require("trello");
var trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_TOKEN);

var task = {
  create: function (title, description,category, callback) {
    async function AssingLabelToCard(TrelloCard, category, callback) {
      var labelID = undefined;
      switch (category) {
        case "Maintenance":
          labelID = process.env.MAINTENANCE_LABEL_ID;
          break;
        case "Research":
          labelID = process.env.RESEARCH_LABEL_ID;
          break;
        case "Test":
          labelID = process.env.TEST_LABEL_ID;
          break;
        default:
          break;
      }

      try{
      trello.addLabelToCard(TrelloCard.id, labelID, function(error,response){
        callback(error,TrelloCard)
      });
      }catch(error){
        callback(error,['Something Broke'])
      }
    }


    try {
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
    )}
    catch(error){
      callback(error,['Something Broke'])
    }
  },
};

module.exports = task;
