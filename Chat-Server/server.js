
const express = require('express'); // for creating web server
const http = require('http');   //for creating http server
const { Server } = require('socket.io');  //for real time communication

const app = express();
const server = http.createServer(app); 
// link web server to http server
const io = new Server(server);

io.on('connection', (socket) => { //event listener
    console.log(`user ${socket.id} is connected.`)

    socket.on('message', data => {
        socket.local.emit('received', data)
        console.log(data)
    })

    socket.on('disconnect', () => {
        console.log(`user ${socket.id} left.`)
    })
})

server.listen(3000, () => {
    console.log('Chat server is running on 3000')
})