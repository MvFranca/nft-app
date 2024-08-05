import { Image, StyleSheet, Text, View } from "react-native";
import { card } from ".";
import { theme } from "../../../theme/fonts";
import Icon from "react-native-vector-icons/Foundation"

const CardMarketPlace = ( 
  {  likes,
    desc,
    url}: card
) => {
    return ( 
        <View style={styles.cardContainer}>
            <Image source={url} style={styles.image}/>

            <View style={styles.desc}>
                <Text style={styles.textDesc}>
                    {desc}
                </Text>

                <View style={styles.likes}>
                    <Icon name="heart" color={"#FF3B30"} size={14}/>
                    <Text style={styles.likesText}>
                        {likes}
                    </Text>
                </View>
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    cardContainer: {
        width: 157,
        height: 200,

        overflow: "hidden",
        marginRight: 9,
        backgroundColor: "#21254f",
        borderRadius: 27,
        padding: 9,
        borderWidth: 1.5, 
        borderColor: '#ffffff2e'
    },
    image: {
        width: "100%",
        height: 139,
        borderRadius: 19,
    },
    desc: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    textDesc: {
        color: theme.colors.white,
        fontWeight: '600'

    },
    likes: {
        flexDirection: "row",
        gap: 3,
        alignItems: "center"

    },
    likesText: {
        color: "#A19CAF",
    }
})

export default CardMarketPlace;