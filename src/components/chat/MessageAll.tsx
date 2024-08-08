import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { StackTypes } from '../../routes/StackRoutes';
import InputMessage from './InputMessage';
import Message from './Message';
import { theme } from '../../theme/fonts';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserData } from '../../services/login';

type Props = {
    navigation?: StackTypes;
};


type Params = {
    id: string;  
    name: string;
}

const MessageAll = ({ navigation }: Props) => {

    const route = useRoute()

    const { id, name } = route.params as Params;
    const [user, setUser] = useState("");

    const getUsername = async () => {
        try {
            const user = await getUserData()
            if (user.name !== null) {
                setUser(user.name);
            }
        } catch (e) {
            console.error("Error while loading username!");
        }
    };

    useEffect(() => {
        navigation?.setOptions({ title: name });
        getUsername()
    },[id])

    const [chatMessages, setChatMessages] = useState([
        {
            id: "1",
            text: "Hello guys, welcome!",
            time: "07:50",
            name: "Marcos",
        },
        {
            id: "2",
            text: "Hi Tomer, thank you! 😇",
            time: "08:50",
            name: "Daniel",
        },
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={chatMessages}
                renderItem={({ item }) => <Message user={user} item={item} />}
            />
            <InputMessage />
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
