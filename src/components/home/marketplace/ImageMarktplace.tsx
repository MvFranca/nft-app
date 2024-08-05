import { BlurView } from "@react-native-community/blur";
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
                <BlurView 
                    style={styles.blurView}
                    blurType="light"
                    blurAmount={20}
                    reducedTransparencyFallbackColor="rgba(0, 0, 0, 0.5)"
                />
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

    },
    desc: {
        color: "#FFF",
        fontSize: 19,
        width: "100%",
        textAlign: "center",
        paddingVertical: 15,
        fontWeight: "bold",
        overflow: "hidden",
        backgroundColor: "transparent",
    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#0000005b', 
        width: "100%",
    },
})

export default ImageMarketPlace;