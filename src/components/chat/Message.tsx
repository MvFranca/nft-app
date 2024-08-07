import { Text, View } from "react-native";
import { StyleSheet } from 'react-native';
import { theme } from "../../theme/fonts";

type props = {
    user: string;
    message: string;
}

const Message = ({user, message}: props) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.user}>
                {user}
            </Text>
            <Text style={styles.message}>
               {message}
            </Text>
        </View>
     );
}


export const styles = StyleSheet.create({
  container: {
    width: "auto",
    maxWidth: "75%",
    height: "auto",
    minHeight: 50,
    justifyContent: "center",

    gap: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,

    backgroundColor: theme.colors.borderColor
  },

  user:{
    color: theme.colors.gray,
    fontWeight: "bold"
  },

  message: {
    color: theme.colors.white,
    fontSize: 16,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between"
  },


});
 
export default Message;