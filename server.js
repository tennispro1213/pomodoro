// var http = require("http");

// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type" : "text/plain"});
//     response.write("Hello World");
//     response.end();

// }).listen(3000);

var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});
app.use(express.static('.'))

app.listen(8080);