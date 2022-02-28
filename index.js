const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const generateRandomUsername = require('./utils.js');

// Really bad but basic way to add usernames and message 'persistence'
var users = {};
var messages = {};

// Fix CSS stylesheet not loading correctly
app.use(express.static('static'));

// Homepage route (Express?)
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Server's socketio events
io.on('connection', (socket) => {
    console.log('new connection!');

    // Generate random username & save it
    const username = generateRandomUsername();
    messages[username] = [];

    socket.broadcast.emit('user-connection', username);

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })

    socket.on('disconnect', () => {
        console.log('connection logged off');
        socket.broadcast.emit('user-disconnect', username);
    });
});

// Starting server (Nodejs?)
server.listen(3000, () => {
    console.log("Listening on *:3000...");
});
