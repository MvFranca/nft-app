import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { StackTypes } from '../../routes/StackRoutes';
import InputMessage from './InputMessage';
import Message from './Message';
import { theme } from '../../theme/fonts';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

    const route = useRoute()

    const { id, name } = route.params as Params;
    const navigation = useNavigation()
    const [user, setUser] = useState("");
    const [message, setMessage] = useState('')

    const getUsername = async () => {
        try {
            const user = await getUserData()
            setUser(user.name);
        } catch (e) {
            console.error("Error while loading username!");
        }
    };

    useEffect(() => {
        navigation.setOptions({ title: name });

        getUsername()

        socket.emit("findRoom", id);
    },[id])


    useLayoutEffect(() => {
        navigation?.setOptions({ title: name });
        socket.emit("findRoom", id);
        socket.on("foundRoom", (roomChats) => setChatMessages(roomChats));
    }, []);

    useEffect(() => {
        console.log("oi")
        socket.on("foundRoom", (roomChats) => setChatMessages(roomChats));
    }, [socket])

    const [chatMessages, setChatMessages] = useState([])

    console.log(chatMessages)


    const handleNewMessage = () => {


        const hour =
            new Date().getHours() < 10
                ? `0${new Date().getHours()}`
                : `${new Date().getHours()}`;
    
        const mins =
            new Date().getMinutes() < 10
                ? `0${new Date().getMinutes()}`
                : `${new Date().getMinutes()}`;
    
        socket.emit("newMessage", {
            message,
            room_id: id,
            user: user,
            timestamp: { hour, mins },
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={chatMessages}
                renderItem={({ item }) => <Message user={user} item={item} />}
            />
            <InputMessage sendMessage={handleNewMessage} message={message} setMessage={setMessage}/>
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
