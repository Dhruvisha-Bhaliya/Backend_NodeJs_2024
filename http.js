const http = require('http'); //built in http module in node js

const server = http.createServer(function(req,res){ // req = request object res = response object
res.end("hello world");
})

server.listen(3000);