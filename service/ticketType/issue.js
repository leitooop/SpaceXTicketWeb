var Trello = require("trello");

var trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_TOKEN);

var issue = {
   create: function(req, res, next) {
       console.log("aca")
    trello.addCard(req.body.title, req.body.desccription, process.env.LIST_ID,
    function (error, trelloCard) {
        if (!error) {
            res.status(201)
            res.send(trelloCard);
        }
        else {
            res.status(500)
            .send({error: 'Could not add card:,' + error});
        }
    });
   }

};

module.exports = issue;