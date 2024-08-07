import { View } from "react-native";

import {styles} from "./styles"
import Message from "../../components/chat/Message";
import InputMessage from "../../components/chat/InputMessage";

const Chat = () => {
    return ( 
    <View style={styles.container}>
        <Message user="Marcos" message="Bom dia, galera!"/>
        <Message user="Daniel" message="Bom dia!"/>

        <InputMessage />
    </View> 
    );
}
 
export default Chat;