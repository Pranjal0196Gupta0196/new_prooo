var multer = require('multer');
var multipart = multer();

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
    res.sendFile(__dirname + '/abc.html');
    // var abc = "post only";
    // res.status(200).json(abc);
});


app.post('/api/users',  multipart.fields([]), function(req, res) {
    console.log(req.body);
    names = req.body.name;
    mobiles = req.body.mobile;
    email_ids = req.body.email_id;
    var response = {
        names: req.body.name ? req.body.name : '',
        mobiles : req.body.mobile ? req.body.mobile:'',
        email_ids : req.body.email_id ? req.body.email_id:''
    };

    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*.ampproject.org');
    //res.setHeader("AMP-Access-Control-Allow-Source-Origin:https://www.intellmo.com");
    res.setHeader('AMP-Access-Control-Allow-Source-Origin', 'http://' + req.headers.host);
    res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
    res.json(response);

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
            "email_id": email_ids

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
            // console.log(record.getId());

             res.status(200).json(req.body);
        });


});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
