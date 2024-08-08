import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from 'react-native';
import { theme } from "../../theme/fonts";

type props = {
    setVisible: (x: boolean) => void;
}

const HeaderChat = ({ setVisible }: props) => {
    return ( 
        <TouchableOpacity activeOpacity={0.5} onPress={() => {
            setVisible(true)
        }} style={styles.container}>
            <Text style={styles.button}>CREATE NEW CHAT</Text>
        </TouchableOpacity>
     );
}


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.gray
  },
  button: {
    color: theme.colors.white,
    fontWeight: "bold"
  }
});
 
export default HeaderChat;