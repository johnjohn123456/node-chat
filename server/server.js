const path =require('path');
const express = require("express");
const socketIO = require("socket.io");
const http = require('http');
var app=express();
const port =process.env.PORT || 3000;
var publicPath=path.join(__dirname + '/../public');


var server = http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket) =>{
    console.log("new user connected");
    
    socket.on('disconnect',() =>{
    console.log("client disconnect");
})
  socket.emit('newMessage', {
     from:"Admin",
      text:"Welcome to chat app",
      createAt:new Date().getTime()
  });
    
    socket.broadcast.emit('newMessage', {
        from:"admin",
        text:"Hello new user",
        createAt:new Date().getTime()
    })
    
   socket.on('createMessage', (message)=>{
             console.log('createMessage',message);
       io.emit('newMessage', {
          from:message.from,
        text:message.text,
           createAt:new Date().getTime()
       });
//       socket.broadcast.emit('newMessage',{
//          from:message.from,
//          text:message.text 
//       });
             });
})

server.listen(port ,()=>{
   console.log("server is running"); 
});