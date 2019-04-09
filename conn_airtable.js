
//const airtable = require("airtable");
const Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyhpWH3acCslB9r6'
});
const base = Airtable.base("appDLlpi8sMoel1Co");
const base_name  = base("Applicants");
//
// const all_app = base_name.select({view:"All Applicants"});
//
// all_app.firstPage((error,records)=>{
//     const names = records.map(record => record.get("Name"));
//     console.log(names)
//}
base_name.create({
    "Name": "duckijn ",
    "Mobile": "duckinggg@gmail.com",
    "email-id": "8234733080"
}, function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.getId());
});