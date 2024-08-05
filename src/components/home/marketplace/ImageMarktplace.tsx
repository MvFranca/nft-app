import { ImageBackground, ImageProps, StyleSheet, Text } from "react-native";

type props = {
    url: string & ImageProps;
    desc: string;
}

const ImageMarketPlace = ({url, desc}: props) => {
    
    if(!url) return null

    return ( 
        <ImageBackground source={url} style={styles.imageContainer}>
            <Text style={styles.desc}>
                {desc}
            </Text>
        </ImageBackground>
     );
}
 
const styles = StyleSheet.create({
    imageContainer: {
        width: 252.26,
        height: 167.57,
        marginRight: 9,
        borderRadius: 30,
        overflow: "hidden",

        justifyContent: "flex-end",
        alignItems: "center",

        paddingBottom: 10
    },
    desc: {
        color: "#FFF",
        fontSize: 19,
        fontWeight: "bold"
    }
})

export default ImageMarketPlace;