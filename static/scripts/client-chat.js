var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('chat-form');
var input = document.getElementById('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('user-connection', (username) => {
    var item = document.createElement('li');
    item.textContent = username + ' connected.';
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('user-disconnect', (username) => {
    var item = document.createElement('li');
    item.textContent = username + ' disconnected.';
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});