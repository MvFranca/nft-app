import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../../layout/Title";
import ImageMarketPlace from "./ImageMarktplace";
import { marketplace } from "../../../mocks/home";

const Marketplace = () => {
    const ITEM_WIDTH = 100; 
    return ( 
        <View>
            <Title>
                NFT Marketplace
            </Title>
            <FlatList 
                style={styles.containerList}
                horizontal
                data={marketplace}
                initialScrollIndex={2} 
                renderItem={({item}) => (
                    <ImageMarketPlace {...item}/>
                )}
                getItemLayout={(data, index) => (
                    { length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index }
                )}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        alignItems: "center"
    },
    containerList: {
        overflow: "scroll",
        flexDirection: "row",
        gap: 9,
        marginTop: 20,
        width: "auto"
    }
}) 

export default Marketplace;