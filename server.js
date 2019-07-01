const http = require('http');
var express = require('express');
const app = express();

app.get('/', function (req, res) {
  console.log('Serving index.html');
  res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/blah', function (req, res) {
  console.log('Serving the blah');
  res.send("blahblah");
});

// Set up server
var server = app.listen(process.env.PORT || 8080, () => {
   console.log("EffingVote listening at 8080");
});