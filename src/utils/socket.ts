import io from "socket.io-client";

// Use o IP e porta corretos. Para o emulador Android, use 10.0.2.2.
const socket = io("http://10.0.2.2:4000"); // Se estiver no emulador Android

socket.on("connect", () => {
    console.log("Socket conectado com sucesso. ID:", socket.id);
});

socket.on("connect_error", (err) => {
    console.error("Erro ao conectar o WebSocket:", err);
});

export default socket;
