var express = require('express');

var app = express();
var myObj = {}

app.get('/user/:id', function(req, res) {
	var prop = "$" + req.query.userControlled; // GOOD
	myObj[prop] = function() {};
	console.log("Request object " + myObj);
});