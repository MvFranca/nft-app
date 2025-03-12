const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server: SocketIOServer } = require("socket.io");

const app = express();
const PORT = process.env.PORT || 4000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const httpServer = http.createServer(app);
const socket = new SocketIOServer(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

// Store chat rooms
let chatRooms = [];

const generateID = () => Math.random().toString(36).substring(2, 10);

const handleCreateRoom = (socket, roomName) => {
    if (!roomName || roomName.trim() === "") {
        console.error("Nome do grupo inválido:", roomName);
        return;
    }

    const roomId = generateID();
    console.log(`Grupo criado com sucesso. ID: ${roomId}, Nome: ${roomName}`);

    socket.join(roomId); // Associar o socket ao ID do grupo
    chatRooms.unshift({ id: roomId, name: roomName, messages: [] }); // Salvar o grupo com ID e nome

    // Atualizar a lista de grupos para todos os clientes conectados
    socket.emit("roomsList", chatRooms); // Atualizar o cliente que criou o grupo
    socket.broadcast.emit("roomsList", chatRooms); // Atualizar outros clientes
};

const handleFindRoom = (socket, roomId) => {
    const room = chatRooms.find((room) => room.id === roomId);

    if (room) {
        console.log(`Mensagens encontradas para o grupo ${room.name}:`, room.messages);

        socket.join(roomId); // Fazer o socket entrar na sala do grupo
        socket.emit("foundRoom", room.messages); // Enviar mensagens existentes do grupo
    } else {
        console.error(`Grupo com ID ${roomId} não encontrado.`);
        socket.emit("foundRoom", []); // Enviar array vazio se o grupo não for encontrado
    }
};

const handleNewMessage = (socket, data) => {
    const { room_id, message, user, timestamp } = data;

    let result = chatRooms.find((room) => room.id === room_id);
    if (result) {
        const newMessage = {
            id: generateID(),
            text: message,
            user,
            time: `${timestamp.hour}:${timestamp.mins}`,
        };

        result.messages.push(newMessage);

        socket.to(room_id).emit("roomMessage", newMessage); // Enviar para todos exceto o remetente
        socket.emit("foundRoom", result.messages); // Atualizar lista de mensagens para o remetente
    } else {
        console.error(`Grupo com ID ${room_id} não encontrado.`);
    }
};

// Configuração do WebSocket
socket.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on("createRoom", (roomName) => handleCreateRoom(socket, roomName));
    socket.on("findRoom", (roomId) => handleFindRoom(socket, roomId));
    socket.on("newMessage", (data) => handleNewMessage(socket, data));

    socket.on("disconnect", () => {
        console.log(`🔥: ${socket.id} user disconnected`);
    });
});

app.get("/api", (req, res) => {
    console.log("Endpoint /api chamado. Grupos:", chatRooms);
    res.json(chatRooms);
});

// Configurar o servidor para ouvir em todas as interfaces (0.0.0.0)
httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on ${PORT}`);
});
