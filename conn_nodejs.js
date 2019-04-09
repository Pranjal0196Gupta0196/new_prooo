var express = require('express');
var app = express();
var port = process.env.PORT || 63342;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies


app.post('/api/users/', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
    console.log(user_id);
    console.log(token);
    console.log(geo)
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);