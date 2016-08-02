/**
 * Created by GStan on 28.07.2016.
 */

var http = require('http');
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

var server = http.createServer(function (request, response) {

    var listener = io.listen(server);
    listener.sockets.on('connection', function(socket){

        socket.emit('message', {'message': 'hello world'});

        //send data to client
        setInterval(function(){
            socket.emit('date', {'date': new Date()});
        }, 1000);

        //recieve client data -> keyboard input
        socket.on('client_data', function(data){
            process.stdout.write(data.letter);
        });


        //camera engine data
        socket.on('camera', function (data) {
            console.log(data)
        });
        //camera engine direction data
        socket.on('camera-dir', function (data) {
            console.log(data)
        });

        //car engine data
        socket.on('engine', function (data) {
           console.log(data)
        });
        //car engine direction data
        socket.on('engine-dir', function (data) {
            console.log(data)
        });


    });




    var path = url.parse(request.url).pathname;

    switch(path){
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('hello world');
            response.end();
            break;
        case '/socket.html':
            fs.readFile(__dirname + path, function(error, data){
                if (error){
                    response.writeHead(404);
                    response.write("opps this FILE doesn't exist - 404");
                    response.end();
                }
                else{
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(data, "utf8");
                    response.end();
                }
            });
            break;
        default:
            response.writeHead(404);
            response.write("opps this URL doesn't exist - 404");
            response.end();
            break;
    }
});

server.listen(8001);
console.log("Server running at 'localhost:8001'");

io.listen(server);