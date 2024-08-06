import { FlatList, View } from "react-native";
import { StyleSheet } from 'react-native';
import UserRanking from "./UserRanking";
import { BlurView } from "@react-native-community/blur";
import { Filter } from "react-native-svg";
import { ranking } from "../../../mocks/statistics";

const Ranking = () => {
    return ( 
        <View style={styles.container}>

          <BlurView 
            style={styles.blurView}
            blurType="light"
            blurAmount={20}
            reducedTransparencyFallbackColor="rgba(0, 0, 0, 0.5)"
          />
          {
            ranking &&

            <FlatList 
              data={ranking}
              renderItem={({item}) =>(
                <UserRanking {...item} />
              )}
            />
          }
        </View>
     );
}
 

export const styles = StyleSheet.create({
  container: {
    
    marginHorizontal: 20,
    paddingHorizontal: 14,
    paddingVertical: 18,
    borderRadius: 18,
    marginTop: 26,

    borderWidth: 1.5,
    borderColor: "#ffffff78",

    overflow: "hidden",
    backgroundColor: "transparent"
  },

  blurView: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#2111347b', 

  },
    


});

export default Ranking;