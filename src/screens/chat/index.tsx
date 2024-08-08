import { FlatList, View } from "react-native";

import {styles} from "./styles"
import Message from "../../components/chat/Message";
import InputMessage from "../../components/chat/InputMessage";
import { useEffect, useState } from "react";
import { userData } from "../../types/user";
import { getUserData } from "../../services/login";
import ChatComponent from "../../components/chat/ChatComponent";
import HeaderChat from "../../components/chat/HeaderChat";
import ModalChat from "../../components/chat/Modal";

import socket from "../../utils/socket";

const Chat = () => {

    const [visible, setVisible] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true)


    async function fetchGroups(){
        fetch("http://192.168.9.106:4000/api/")
        .then((res) => res.json())
        .then((data) => setRooms(data))
        .catch((err) => console.error(err));

    }

    useEffect(() => {
        fetchGroups();
    }, []);
    
    //👇🏻 Runs whenever there is new trigger from the backend
    useEffect(() => {
        socket.on("roomsList", (rooms) => {
     
            setRooms(rooms);
        });
    }, [socket]);


    useEffect(() => {
        if(rooms.length > 0){
            setLoading(false)
        }

    },[rooms])

    return ( 
    <View style={styles.container}>

        <HeaderChat
            setVisible= {setVisible}
        />
        {
            !loading &&
            <FlatList 
                data={rooms}
                // keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <ChatComponent item={item}/>
                )}
            />
        }
         {visible && <ModalChat setVisible={setVisible} />}
    </View> 
    );
}
 
export default Chat;