import { Dimensions, FlatList, ImageProps, StyleSheet, View } from "react-native";
import Subtitle from "../../layout/Subtitle";
import CardMarketPlace from "./CardMarktplace";

interface card  {
    likes: number;
    desc: string;
    url: ImageProps;
}

type props = {
    title: string;
    data: card[];
}

const SubCarrossel = ({title, data}: props) => {
    return ( 
        <View>
            <Subtitle>
                {title}
            </Subtitle>
            <FlatList 
                style={styles.containerList}
                horizontal
                data={data}
                renderItem={({item}) => (
                    <CardMarketPlace {...item}/>
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
        marginTop: 7,
        width: "auto"
    }
}) 


export default SubCarrossel;