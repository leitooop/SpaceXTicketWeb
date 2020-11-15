var Trello = require("trello");
var IDGenerator = require("../../utils/bugIdGenerator");
var trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_TOKEN);

var task = {
  create: function (req, res, next) {
    async function AssingLabelToCard(TrelloCard, category) {
        var labelID = undefined
      switch (category) {
        case "maintenance":
            labelID = process.env.MAINTENANCE_LABEL_ID
          break;
        case "research":
            labelID = process.env.RESEARCH_LABEL_ID
          break;
        case "test":
            labelID = process.env.TEST_LABEL_ID
          break;
        default:
            res.status(400).send({error: "categoria invalida" });
          break;
      }
      trello.addLabelToCard(TrelloCard.id, labelID, function (
        error,
        response
      ) {
        if (!error) {
          console.log(response);
          res.status(201);
          res.send({ TrelloCard, response });
        }
      });
    }

    trello.addCard(
      req.body.title,
      req.body.description,
      process.env.LIST_ID,
      function (error, trelloCard) {
        if (!error) {
          AssingLabelToCard(trelloCard, req.body.category);
        } else {
          res.status(500).send({ error: "Could not add card:," + error });
        }
      }
    );
  },
};

module.exports = task;
