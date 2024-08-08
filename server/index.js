const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server: SocketIOServer } = require('socket.io');

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const httpServer = http.createServer(app);
const socket = new SocketIOServer(httpServer, {
    cors: {
        origin: "http://192.168.9.106:3000" 
    }
});

// Store chat rooms
let chatRooms = [];

const generateID = () => Math.random().toString(36).substring(2, 10);

socket.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on("createRoom", (roomName) => {
        console.log("Room created:", roomName);
        socket.join(roomName);
        chatRooms.unshift({ id: generateID(), name: roomName, messages: [] });
        socket.emit("roomsList", chatRooms);
    });

    socket.on("findRoom", (id) => {
        let result = chatRooms.filter((room) => room.id === id);
        socket.emit("foundRoom", result[0]?.messages || []);
    });

    socket.on("newMessage", (data) => {
        const { room_id, message, user, timestamp } = data;
        console.log(user)
        console.log('user')
        let result = chatRooms.filter((room) => room.id === room_id);
        if (result.length > 0) {
            const newMessage = {
                id: generateID(),
                text: message,
                user,
                time: `${timestamp.hour}:${timestamp.mins}`,
            };

            result[0].messages.push(newMessage);
            socket.to(result[0].name).emit("roomMessage", newMessage);
            socket.emit("roomsList", chatRooms);
            socket.emit("foundRoom", result[0].messages);
        }
    });

    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});

app.get("/api", (req, res) => {
    res.json(chatRooms);
});

httpServer.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
