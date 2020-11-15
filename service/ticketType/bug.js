var Trello = require("trello");
var IDGenerator = require("../../utils/bugIdGenerator")
var trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_TOKEN);

var bug = {
   create: function(req, res, next) {

    async function AssingLabelToCard(TrelloCard){
        trello.addLabelToCard(TrelloCard.id,process.env.BUG_LABEL_ID,function(error, response){
            if (!error) {
                console.log(response)
                res.status(201)
                res.send({TrelloCard,response});
                }
        })
    }

    async function AssignCardToRandomMember  (TrelloCard){
            trello.getBoardMembers(process.env.BOARD_ID,function(error, TrelloMembers){
            console.log(TrelloMembers)
            const member = TrelloMembers[Math.floor(Math.random() * TrelloMembers.length)];
            trello.addMemberToCard(TrelloCard.id,member.id,function(error,response){
                if (!error) {
                AssingLabelToCard(TrelloCard)   
                }
            })
        })
   }
    
    const BugID = IDGenerator()
    trello.addCard(BugID, req.body.description, process.env.LIST_ID,
    function (error, trelloCard) {
        if (!error) {
            AssignCardToRandomMember(trelloCard).then(()=>{
            })
           
        }
        else {
            res.status(500).send({error: 'Could not add card:,' + error})
        }
    });
    },

};

module.exports = bug;