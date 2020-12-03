var Trello = require("trello");
var IDGenerator = require("../../utils/bugIdGenerator");
var trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_TOKEN);

var bug = {
  create: function (description, callback) {
    async function AssingLabelToCard(TrelloCard, callback) {
      try {
        trello.addLabelToCard(
          TrelloCard.id,
          process.env.BUG_LABEL_ID,
          function (error, TrelloMember) {
            if (!error) {
              callback(error, TrelloCard);
            } else {
              console.log("error");
              callback(error, ["Something Broke"]);
            }
          }
        );
      } catch (error) {
        callback(error, ["Something Broke"]);
      }
    }

    async function AssignCardToRandomMember(TrelloCard, callback) {
      try {
        trello.getBoardMembers(process.env.BOARD_ID, function (
          error,
          TrelloMembers
        ) {
          const member =
            TrelloMembers[Math.floor(Math.random() * TrelloMembers.length)];
          try {
            trello.addMemberToCard(TrelloCard.id, member.id, function (
              error,
              response
            ) {
              if (!error) {
                AssingLabelToCard(TrelloCard, callback);
              } else {
                callback(error, ["Something Broke"]);
              }
            });
          } catch (error) {
            callback(error, ["Something Broke"]);
          }
        });
      } catch (error) {
        callback(error, ["Something Broke"]);
      }
    }

    const BugID = IDGenerator();
    try {
      
   
    trello.addCard(BugID, description, process.env.LIST_ID, function (
      error,
      trelloCard
    ) {
      if (!error) {
        AssignCardToRandomMember(trelloCard, callback);
      } else {
        callback(error, ["Something Broke"]);
      }
    }) } catch (error) {  
      callback(error, ["Something Broke"]);
    }
  },
};

module.exports = bug;
