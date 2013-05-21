var http = require("http");
var fs = require("fs");
console.log("Starting");
var host = "127.0.0.1";
var port = 1337;
var server = http.createServer(function(request, response) {
	console.log("Received request: " + request.url);
	fs.readFile("/public" + request.url, function() {

	});

	response.writeHead(200, {"Content-type":"text/plan"});
	response.end("Hello World!");
});
server.listen(port, host, function() {
	console.log("Listening " + host + ":" + port);
});