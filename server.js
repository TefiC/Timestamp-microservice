var express = require("express");
var app = express();

var moment = require("moment");

app.get('/', function (req, res) {
    
    var isValid = moment('December%2015,%202015', 'MMMM%20DD,%20YYYY', true).isValid(); 
    
    if (isValid) {
        res.send('Hello World!' + isValid.toString());
    } else {
        var JSONres = {
            "unix" : null,
            "natural" : null 
        }
        res.send(JSON.stringify(JSONres));
    }
   
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});




