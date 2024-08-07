import { FlatList, View } from "react-native";

import {styles} from "./styles"
import Message from "../../components/chat/Message";
import InputMessage from "../../components/chat/InputMessage";
import { useEffect, useState } from "react";
import { userData } from "../../types/user";
import { getUserData } from "../../services/login";

const Chat = () => {

    // const [user, setUser] = useState<userData>({} as userData)

    // async function userData(){
    //     const user = await getUserData()
    //     setUser(user)
    // }

    // useEffect(() => {
    //     userData()
    // }, [])

    const [chatMessages, setChatMessages] = useState([
        {
            id: "1",
            text: "Hello guys, welcome!",
            time: "07:50",
            user: "Marcos",
        },
        {
            id: "2",
            text: "Hi Tomer, thank you! 😇",
            time: "08:50",
            user: "Daniel",
        },
    ]);


    return ( 
    <View style={styles.container}>

        <FlatList 
            style={ styles.messages}
            data={chatMessages}
            renderItem={({item}) => (
                <Message user={item.user} message={item.text}/>
            )}
        />

        <InputMessage />
    </View> 
    );
}
 
export default Chat;