#!/usr/bin/node

var server=require('net').createServer();

server.on('connection',function(socket){
  console.log('new connection from',socket.romoteAddress);
  socket.on('data',fucntion(data){
    console.log(data.length,data);
  });
  socket.on('end',function(){
    conosole.log(socket.romoteAddress,'disconnected');
  });
}).listen(8080,function(){
  console.log('TCP server is listening on port 8080');
})
