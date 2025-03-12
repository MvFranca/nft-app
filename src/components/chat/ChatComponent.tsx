import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from 'react-native';
import { theme } from "../../theme/fonts";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StackTypes } from "../../routes/StackRoutes";
import { messageType } from "../../types/messages";

type props = {
    item: {
        id: string;
        name: string;
        messages: messageType[]
    }
}

const ChatComponent = ({item}: props) => {

    const navigation = useNavigation<StackTypes>()
    const [messages, setMessages] = useState<messageType>();

    useEffect(() => {
        setMessages(item.messages[item.messages.length - 1]); 
    }, [item.messages]);

    const handleNavigation = () => {
        navigation.navigate("chatMessage", {
            id: item.id,
            name: item.name,
        });
    };


    return ( 
        <TouchableOpacity style={styles.container}
            onPress={handleNavigation}
        >
            <Text style={styles.user}>
                {item.name}
            </Text>
            <Text style={styles.message}>
                {messages?.text ? messages.text : "Send the first message..."}
            </Text>
        </TouchableOpacity>
     );
}


export const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: theme.colors.borderColor,

    justifyContent: "center",
  },
  user: {
    fontSize: 17,
    color: theme.colors.gray,
    fontWeight: "bold"
  },
  message: {
    fontSize: 13,
    color: theme.colors.white
  }
});
 
export default ChatComponent;