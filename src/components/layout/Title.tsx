import { StyleProp, StyleSheet, Text, TextProps } from "react-native";
import { theme } from "../../theme/fonts";

type props = {
    children: React.ReactNode;

}

const Title = ({children}: props) => {
    return ( 
        <Text style={[styles.title]}>
            {children}
        </Text>
     );
}

const styles = StyleSheet.create({
    title: {
        color: theme.colors.white,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default Title;