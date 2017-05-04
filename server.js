var express = require("express");
var app = express();

var moment = require("moment");

var date = 'December%20,%202015'; //process.argv[2];

app.get('/', function (req, res) {
    
    var isValid = moment(date, 'MMMM%20DD,%20YYYY', true).isValid(); 
    
    if (isValid) {
        
        var naturalTime = date.split("%20").join(' ');
        var unixTime = new Date(naturalTime).getTime();
        
    } else {
        
        naturalTime = null;
        unixTime = null;
        
    }
    
    var JSONres = {
        "unix" : unixTime,
        "natural" : naturalTime
    }
    
    res.send(JSON.stringify(JSONres));
   
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});




