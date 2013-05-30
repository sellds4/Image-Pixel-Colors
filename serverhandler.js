var url = require("url"),
    fs = require("fs"),
    qs = require("querystring");
    http = require('http-get');

var handleRequest = function(req, res) {
  if(req.method === "POST") {
    console.log(__dirname);
    res.writeHead(302, {'Location' : '/'});
    console.log('Posting');
    var postData = '';
    req.on('data', function(chunk) {
      postData += chunk;
      console.log(postData);
      postData = JSON.parse(postData);
      console.log(postData);
      console.log(__dirname + postData);
    });
    req.on('end', function() {
      http.get(postData, postData.toString(), function (error, result) {
        if (error) {
          console.log(error);
        } else {
            console.log('It\'s saved!');
        }
      });
    });
  }
};

exports.handleRequest = handleRequest;