import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { StackTypes } from '../../routes/StackRoutes';
import InputMessage from './InputMessage';
import Message from './Message';
import { theme } from '../../theme/fonts';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getUserData } from '../../services/login';
import socket from '../../utils/socket';

type Props = {
    navigation?: StackTypes;
};

type Params = {
    id: string;  
    name: string;
}

const MessageAll = ({  }: Props) => {

    const route = useRoute();
    const { id, name } = route.params as Params;
    const navigation = useNavigation();

    const [user, setUser] = useState("");
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
useEffect(() => {
    navigation.setOptions({ title: name });

    const getUsername = async () => {
        try {
            const user = await getUserData();
            setUser(user.name);
        } catch (e) {
            console.error("Error while loading username!");
        }
    };

    getUsername();

    // Emitir evento para buscar mensagens do grupo
    socket.emit("findRoom", id);

    // Atualizar mensagens do grupo ao receber o evento "foundRoom"
    const handleFoundRoom = (roomChats) => {
        console.log("Mensagens recebidas do grupo:", roomChats);
        setChatMessages(roomChats); // Atualiza o estado com as mensagens recebidas
    };

    socket.on("foundRoom", handleFoundRoom);

    // Atualizar mensagens ao receber novas via "roomMessage"
    const handleNewMessage = (newMessage) => {
        console.log("Nova mensagem recebida:", newMessage);
        setChatMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.on("roomMessage", handleNewMessage);

    // Limpar listeners ao desmontar o componente
    return () => {
        socket.off("foundRoom", handleFoundRoom);
        socket.off("roomMessage", handleNewMessage);
    };
}, [id, name, navigation]);

    
    

    const handleNewMessage = () => {
        const hour = new Date().getHours().toString().padStart(2, '0');
        const mins = new Date().getMinutes().toString().padStart(2, '0');

        socket.emit("newMessage", {
            message,
            room_id: id,
            user: user,
            timestamp: { hour, mins },
        });

        setMessage(''); 
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={chatMessages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Message user={user} item={item} />}
            />
            <InputMessage 
                sendMessage={handleNewMessage} 
                message={message} 
                setMessage={setMessage} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundPrincipal,
        padding: 20,
    },
});

export default MessageAll;
