import { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../../theme/fonts";

const Filter = ({children}: PropsWithChildren) => {
    return ( 
        <View style={styles.container}>
            <Icon/>
            <Text style={styles.textFilter}>
                {children}
            </Text>
            <Icon name="keyboard-arrow-down" size={20} color={theme.colors.gray}/>
        </View>
     );
}


export const styles = StyleSheet.create({
  container: {
    height: 44,
    width: 164,
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingVertical: 12,

    overflow: "hidden",
    backgroundColor: theme.colors.background2 ,
    justifyContent: "space-between",
    alignItems: "center",

    borderWidth: 1.5,
    borderColor: theme.colors.borderColor,
    
    flexDirection: "row",
    
  },

  textFilter: {
    color: theme.colors.white
  }
});
 
export default Filter;