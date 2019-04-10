var express = require('express');
var app = express();
var port = process.env.PORT || 2190;
// const path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies
app.use(express.static(__dirname + ' '));

var names;
var mobiles;
var email_ids;
const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyhpWH3acCslB9r6'
});

const base = Airtable.base("appDLlpi8sMoel1Co");
const base_name  = base("Applicants");

app.get('/api/users', function(req,res) {
    // res.setHeader('Access-Control-Allow-Origin', 'localhost:8080/api/users');
    // res.setHeader('Access-Control-Allow-Methods', 'GET');
    // res.json({ success: 'Hello World' });
    //res.sendFile(__dirname + '/def.html');
    var abc = "post only";
    res.status(200).json(abc);
});


app.post('/api/users', function(req, res) {
    console.log(req.body);
    names = req.body.name;
    mobiles = req.body.mobile;
    email_ids = req.body.email_id;
    // if(res.status(200).json({
    //     message: 'Thanks for reaching out. We would get back to you soon.'
    // })) {

//    res.send(names + ' ' + mobiles + ' ' + email_ids);

        // console.log(names);
        // console.log(mobiles);
        // console.log(email_ids)

        base_name.create({

            "Name": names,
            "Mobile": mobiles,
            "email-id": email_ids

        }, function (err, record) {
            if (err) {
                console.error(err);
                return;
            }
            // else{
            //     if(!sdf) {
            //         res.status(400)
            //     }
            //     if(fiy){
            //
            //     }
            // }
            console.log(record.getId());
            // res.setheader('Access-Control-Allow-Credentials', true);
            // res.setheader('Access-Control-Allow-Origin', '*.ampproject.org');
            // res.setheader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
            // res.setheader('AMP-Access-Control-Allow-Source-Origin: https://intellmo.com');
            // res.setheader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
            // res.setheader("Access-Control-Allow-Origin", "*");
            // res.setheader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            // res.setheader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.status(200).json(req.body);
        });

    // res.setheader('Access-Control-Allow-Credentials', true);
    // res.setheader('Access-Control-Allow-Origin', '*.ampproject.org');
    // res.setheader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
    // res.setheader('AMP-Access-Control-Allow-Source-Origin: https://intellmo.com');
    // res.setheader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
    // res.setheader("Access-Control-Allow-Origin", "*");
    // res.setheader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // res.setheader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.status(200).json({message : 'Thanks for reachinf out. We would get back to you soon'});

});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
