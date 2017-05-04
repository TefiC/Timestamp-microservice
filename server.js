/*
 * Required modules
 */
var express = require("express");
var url = require("url");
var moment = require("moment");

/*
 * A
 */
var app = express();

app.get('/*', function (req, res) {
	
	//Extract parameters from URL
	var date = req.params[0];
	var month = date.split(' ')[0];
	
	//Check if the date format is valid 
	var isValid = moment(date, 'MMM DD, YYYY').isValid(); 
	
	// If the format is valid and the month is a string
	if (isValid == true && isNaN(month)) {
		
		// If the date is a string, split by the space character
		// and join them with a space, then calculate the date in UNIX
		if (isNaN(date) == true) {
			
			var naturalTime = date;
			
			//Get the unix time and convert it to seconds
			var unixTime = (new Date(naturalTime).getTime())/1000;
			
		// Else, if its a number, a unix format,
		// convert the unix time to the right format
		} else {
			
			var unixTime = date;
			var naturalTime = moment.unix(unixTime).format("MMMM DD, YYYY");
		}
	  
	//Else, if the format is not valid 
	} else {
		
		var naturalTime = null;
		var unixTime = null;
		
	}
	
	//Create the JSON object, and then send it back to the client
	var JSONres = {
		"unix" : unixTime,
		"natural" : naturalTime
	}
	
	res.send(JSON.stringify(JSONres));
   
});

app.listen(process.env.PORT, function () {
	console.log('Example app listening to current port!');
});




