const path =require('path');
const express = require("express");
const socketIO = require("socket.io");
const http = require('http');
var app=express();
const port =process.env.PORT || 3000;
var publicPath=path.join(__dirname + '/../public');
console.log(__dirname + '/../public');
console.log(publicPath);

var server = http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket) =>{
    console.log("hello new user");
    
    socket.on('disconnect',() =>{
    console.log("client disconnect");
})
})

server.listen(port ,()=>{
   console.log("server is running"); 
});