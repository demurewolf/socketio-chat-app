const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// Homepage route (Express?)
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Server's socketio events
io.on('connection', (socket) => {
    console.log('new connection!');
    socket.broadcast.emit('hi');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })

    socket.on('disconnect', () => {
        console.log('connection logged off');
    });
});

// Starting server (Nodejs?)
server.listen(3000, () => {
    console.log("Listening on *:3000...");
});
