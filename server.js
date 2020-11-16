var express = require("express");
var bodyParser = require('body-parser')
require('dotenv').config()
var app = express();
var port = process.env.PORT || 3000;
var router = require ("./api/routes");
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

router(app)

app.listen(port,() => { console.log('Server started on port: ' + port); });