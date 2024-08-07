const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server: SocketIOServer } = require('socket.io');

const app = express();
const PORT = 4000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Create HTTP server and Socket.IO server
const httpServer = http.createServer(app);
const io = new SocketIOServer(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
});

// Socket.IO connection handler
io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});

// API route
app.get("/api", (req, res) => {
    res.json({
        message: "Hello world",
    });
});

// Start the server
httpServer.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
