import { StyleSheet, Text } from "react-native";
import { theme } from "../../theme/fonts";

type props = {
    children: React.ReactNode
}

const Subtitle = ({children}: props) => {
    return ( 
        <Text style={[styles.title]}>
            {children}
        </Text>
     );
}


const styles = StyleSheet.create({
    title: {
        color: theme.colors.white,
        fontSize: 18,
        fontWeight: "bold",
    }
})

 
export default Subtitle;