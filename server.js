var http = require("http"),
    serverhandler = require('./serverhandler'),
    port = 8080,
    ip = "127.0.0.1";

var server = http.createServer(serverhandler.handleRequest);

console.log("Listening on http://" + ip + ":" + port);

server.listen(port, ip);