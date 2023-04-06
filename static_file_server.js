var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    fs.readFile(__dirname + "/index.html",function(err,data){
        if(err){
            res.writeHead(404);
            res.end("File Not Found");
        } else {
            res.writeHead(200);
            res.end(data);
        }
    })
});

server.listen(3000)