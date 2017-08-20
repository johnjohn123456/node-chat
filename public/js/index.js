  var socket = io();
        socket.on('connect',()=>{
            console.log("Connection");
            
           socket.emit('createMessage',{
               from:'sakis@gmail.com',
               text:"ela re magkoura"
           });
        })
        
        socket.on('disconnect',()=>{
            console.log("disconnected from server");
        })

       socket.on('newMessage',function (message) {
           console.log('message' ,message);
       });