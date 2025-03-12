import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";

import { styles } from "./styles";
import ChatComponent from "../../components/chat/ChatComponent";
import HeaderChat from "../../components/chat/HeaderChat";
import ModalChat from "../../components/chat/Modal";
import socket from "../../utils/socket";

const Chat = () => {
    const [visible, setVisible] = useState(false); // Estado para controlar visibilidade do modal
    const [rooms, setRooms] = useState([]);       // Estado para armazenar os grupos
    const [loading, setLoading] = useState(true); // Estado para indicar carregamento

    async function fetchGroups() {
        console.log("Chamando o endpoint /api para buscar grupos...");
        try {
            const response = await fetch("http://192.168.9.108:4000/api/"); // Para emulador Android
            const data = await response.json();
            console.log("Grupos recebidos:", data);
            setRooms(data);
        } catch (error) {
            console.error("Erro ao buscar os grupos:", error);
        }
    }

    // Buscar grupos ao montar o componente
    useEffect(() => {
        fetchGroups();
    }, []);

    useEffect(() => {
        socket.on("roomsList", (rooms) => {
            console.log("Lista de grupos atualizada recebida:", rooms);
            setRooms(rooms);
        });

        return () => {
            socket.off("roomsList");
        };
    }, []);

    useEffect(() => {
        setLoading(rooms.length === 0);
    }, [rooms]);

    return (
        <View style={styles.container}>
            <HeaderChat setVisible={setVisible} />
            {!loading && (
                <FlatList
                    data={rooms}
                    keyExtractor={(item) => item.id} // Garantir chave única para renderização
                    renderItem={({ item }) => <ChatComponent item={item} />}
                />
            )}
            {visible && <ModalChat setVisible={setVisible} />}
        </View>
    );
};

export default Chat;
