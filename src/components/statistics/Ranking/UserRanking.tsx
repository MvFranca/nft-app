import { Image, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from 'react-native';
import { theme } from "../../../theme/fonts";

type props = {
  id: number;
  name: string;
  points: number;
  percentage: number;
}

const UserRanking = ({id, name, points, percentage}: props) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.dataUser}>

                <Text style={styles.position}>
                    {id}
                </Text>

                <Image source={require("../../../assets/topSeller/image1.png")} style={{width: 40, height: 40, borderRadius: 9}}/>

                <View>

                    <Text style={styles.name}>{name}</Text>

                    <TouchableOpacity>
                        <Text style={styles.viewInfo}>view info</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View>
                    <Text style={styles.points}>
                        {points}
                    </Text>
                    <Text style={styles.percentage}>
                        {percentage}%
                    </Text>

            </View>

        </View>
     );
}


export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  dataUser: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  position: {
    fontSize: 14,
    color: theme.colors.gray,
  },
  name: {
    fontSize: 15,
    color: theme.colors.white,
    fontWeight: "bold"
  },
  viewInfo: {
    color: theme.colors.gray,
    marginTop: 3,
  },
  points: {
    color: theme.colors.white,
    fontSize: 15
  },
  percentage: {
    textAlign: "right",
    fontSize: 13,
    marginTop: 3,
    color: "#34C759"
  }
});
 
export default UserRanking;