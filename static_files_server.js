var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(req,res){

    var pathname = url.parse(req.url,true).pathname;
    
    fs.readFile(__dirname + "/public" + pathname,function(err,data){
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