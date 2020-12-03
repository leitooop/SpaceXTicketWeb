var express = require("express");
var bodyParser = require('body-parser')
require('dotenv').config()
var app = express();
var cors = require('cors');


var port = process.env.PORT || 3000;
var router = require ("./api/routes");
app.use(bodyParser.json());

var allowedOrigins = ['http://localhost:3000'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

router(app)

app.get('*', function(req, res, next) {
  let err = new Error("Page Doesn't Exist");
  err.statusCode = 404;
  next(err);
});

app.listen(port,() => { console.log('Server started on port: ' + port); });