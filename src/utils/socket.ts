import { io } from "socket.io-client";


const socket = io(`http://192.168.9.106:4000/`)

export default socket;