import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { theme } from "../../theme/fonts";
import React from "react";


const Subtitle = ({children, style}: TextProps) => {
    return ( 
        <Text style={[styles.title, style]}>
            {children}
        </Text>
     );
}


const styles = StyleSheet.create({
    title: {
        color: theme.colors.white,
        fontSize: 18,
        fontWeight: "600"
    }
})

 
export default Subtitle;