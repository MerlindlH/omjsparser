let appjs = require("./app.js");

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  appjs.parseMensapage().then((mealArray)=>{
    console.log("request successful");
    res.end(mealArray);
  }, (error)=>{
    console.warn("Error:"+error, error.statusText, error.responseText);
  });
  res.write('Hello World!');
}).listen(8080);