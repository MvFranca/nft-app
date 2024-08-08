import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from 'react-native';
import { theme } from "../../theme/fonts";
import Icon from "react-native-vector-icons/FontAwesome"
import { useEffect, useState } from "react";
import { userData } from "../../types/user";
import { getUserData } from "../../services/login";

type props = {
  sendMessage: () => void;
  message: string;
  setMessage: (value: string) => void;
}

const InputMessage = ({sendMessage, message, setMessage}: props) => {


    const [user, setUser] = useState<userData>({} as userData)

    async function userData(){
        const user = await getUserData()
        setUser(user)
    }

    useEffect(() => {
        userData()
    }, [])


    return ( 
        <View style={styles.container}>
          <TextInput
                id='inputMessage'
                style={styles.input}
                placeholder="Send a mensage..."
                placeholderTextColor={theme.colors.white}
                autoCapitalize="none"
                multiline={true} 
                autoCorrect={true}
                value={message}
                onChangeText={(e) => setMessage(e)}
            />

            <TouchableOpacity style={styles.buttonSend}
                onPress={sendMessage}
            >
                <Icon name="send" size={18} color={theme.colors.white}/>
            </TouchableOpacity>
        </View>
     );
}


export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00000054",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",

    width: "100%",
    minHeight: 60,
    height: "auto",

    position: "absolute",
    bottom: 30,
    right: 20,

    borderWidth: 1.5,
    borderColor: theme.colors.borderColor,
  },
  input: {
    color: theme.colors.white,
    maxWidth: "80%",

    flexWrap: 'wrap',
    maxHeight: 65
  },
  buttonSend: {
    marginRight: 10,
  }
});
 
export default InputMessage;