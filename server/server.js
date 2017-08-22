const path =require('path');
const express = require("express");
const socketIO = require("socket.io");
const http = require('http');
const {generateMessage} =require('./utils/message.js');
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
  socket.emit('newMessage', generateMessage('Admin','Welcome to chat app'));
  
    
    socket.broadcast.emit('newMessage', generateMessage('Admin',"New User Connected"));
   socket.on('createMessage', (message,callback)=>{
             console.log('createMessage',message);
       socket.broadcast.emit('newMessage', generateMessage(message.from ,message.text,port));
//       socket.broadcast.emit('newMessage',{
//          from:message.from,
//          text:message.text 
//       });
       callback('From server');
             });
})

server.listen(port ,()=>{
   console.log("server is running"); 
});