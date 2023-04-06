var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(req,res){

    var pathname = url.parse(req.url,true).pathname;

    if(pathname == "/index.html" || pathname == "/gummersbach.html"){
        fs.readFile(__dirname + pathname,function(err,data){
            if(err){
                res.writeHead(404);
                res.end("File Not Found");
            } else {
                res.writeHead(200);
                res.end(data);
            }
        })
    } else {
        res.writeHead(404);
        res.end("File Not Found");
    } 
});

server.listen(3000)