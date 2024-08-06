import { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/Entypo";
import { theme } from "../../../theme/fonts";

type props = {
  children: React.ReactNode;
  icon: string
}

const Filter = ({children, icon}: props) => {
    return ( 
        <View style={styles.container}>
            <Icon2 name={icon} size={18} color={theme.colors.borderColor}/>
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
    paddingHorizontal: 15,
    gap: 8,
    backgroundColor: theme.colors.background2 ,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1.5,
    borderColor: theme.colors.borderColor,
    
    overflow: "hidden"
  },

  textFilter: {
    color: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  }
});
 
export default Filter;