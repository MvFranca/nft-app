import { Dimensions, FlatList, ImageProps, StyleSheet, View } from "react-native";
import Subtitle from "../../layout/Subtitle";
import CardMarketPlace from "./CardMarktplace";

export type card = {
    likes: number;
    desc: string;
    url: ImageProps;
}

type props = {
    title: string;
    data: card[];
}

const SubCarrossel = ({title, data}: props) => {

    const ITEM_WIDTH = 100; 

    return ( 
        <View  style={styles.container}>
            <Subtitle style={{paddingHorizontal: 14}}>
                {title}
            </Subtitle>
            <FlatList 
                style={styles.containerList}
                horizontal
                data={data}
                renderItem={({item}) => (
                    <CardMarketPlace {...item}/>
                )}
                initialScrollIndex={2} 
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
        marginTop: 27,
    },
    containerList: {
        overflow: "scroll",
        flexDirection: "row",
        gap: 9,
        marginTop: 7,
        width: "auto"
    }
}) 


export default SubCarrossel;