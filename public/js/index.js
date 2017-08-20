  var socket = io();
        socket.on('connect',()=>{
            console.log("Connection");
            
       
        })
        
        socket.on('disconnect',()=>{
            console.log("disconnected from server");
        })

     socket.on('newMessage',function(message){
         console.log("newMessage" ,message);
     })