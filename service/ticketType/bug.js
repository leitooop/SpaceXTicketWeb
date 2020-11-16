var Trello = require("trello");
var IDGenerator = require("../../utils/bugIdGenerator");
var trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_TOKEN);

var bug = {
  create: function (description, callback) {
    async function AssingLabelToCard(TrelloCard,callback) {
      trello.addLabelToCard(TrelloCard.id, process.env.BUG_LABEL_ID,callback);
    }
    async function AssignCardToRandomMember(TrelloCard,callback) {
      trello.getBoardMembers(process.env.BOARD_ID, function (
        error,
        TrelloMembers
      ) {
        const member =
          TrelloMembers[Math.floor(Math.random() * TrelloMembers.length)];
        trello.addMemberToCard(TrelloCard.id, member.id, function (
          error,
          response
        ) {
          if (!error) {
            AssingLabelToCard(TrelloCard,callback);
          }
        });
      });
    }

    const BugID = IDGenerator();
    trello.addCard(BugID, description, process.env.LIST_ID, function (
      error,
      trelloCard
    ) {
      if (!error) {
        AssignCardToRandomMember(trelloCard,callback);
      } else {
        callback;
      }
    });
  },
};

module.exports = bug;
