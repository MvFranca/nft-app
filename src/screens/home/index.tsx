import { ScrollView, StatusBar, Text, View } from "react-native";
import { style } from "./styles";
import Marketplace from "../../components/home/marketplace/Marketplace";
import { theme } from "../../theme/fonts";
import SubCarrossel, { card } from "../../components/home/subCarrossel";
import { trendingCollections } from "../../mocks/home";

const Home = () => {

    return ( 
        <ScrollView style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.backgroundPrincipal} />
            <Marketplace/>
            <SubCarrossel title="Trending collections" data={trendingCollections}/>
            <SubCarrossel title="Top seller" data={trendingCollections}/>
        </ScrollView>
     );
}
 
export default Home;