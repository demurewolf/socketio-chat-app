# SocketIO Chat Tutorial Application

## Introduction

This repository is the result of finishing the tutorial for SocketIO's bidirectional, event-based communication library.

This chat app is basic and rather boring. For enrichment see if you can implement the possible improvements below.

To start the chat server, use `node index.js`

## Caveats

This tutorial was made with:
- Node v16.13.0
- Express v4.17.1
- SocketIO v4.4.0

## Homework

Here are some ideas to improve the application:

- Broadcast a message to connected users when someone connects or disconnects.
- Add support for nicknames.
- Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
- Add “{user} is typing” functionality.
- Show who’s online.
- Add private messaging (Multiple chat rooms?)
