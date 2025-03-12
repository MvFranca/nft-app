import io from "socket.io-client";

const SERVER_URL =
    process.env.NODE_ENV === "production"
        ? "https://seu-render-app.onrender.com"
        : "http://10.0.2.2:4000"; 

const socket = io(SERVER_URL);

socket.on("connect", () => {
    console.log("Socket conectado com sucesso. ID:", socket.id);
});

socket.on("connect_error", (err) => {
    console.error("Erro ao conectar o WebSocket:", err);
});

export default socket;
