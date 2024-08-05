import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../theme/fonts";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundPrincipal,
        paddingTop: 20,
        width: Dimensions.get("window").width
    }
})