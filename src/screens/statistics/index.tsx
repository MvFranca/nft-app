import { Text, View } from "react-native";
import Subtitle from "../../components/layout/Subtitle";
import { styles } from "./styles";
import Options from "../../components/statistics/Options";
import { useState } from "react";
import Ranking from "../../components/statistics/Ranking/Ranking";
import Filter from "../../components/statistics/Ranking/Filters";

const Statistics = () => {

    const [buttonOption, setButtonOption] = useState(false)

    return ( 
        <View style={styles.container}>
            <Subtitle style={{paddingVertical: 22, textAlign: "center"}}>
                Stats
            </Subtitle>

            <Options option={buttonOption} setOption={setButtonOption}/>

            <View style={styles.filters}>
                <Filter>
                     All categories
                </Filter>
                <Filter>
                    All Chains
                </Filter>
            </View>
            <Ranking/>
        </View>
     );
}
 
export default Statistics;