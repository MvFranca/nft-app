import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { style } from "./styles";
import Marketplace from "../../components/home/marketplace/Marketplace";
import { theme } from "../../theme/fonts";
import { topSeller, trendingCollections } from "../../mocks/home";
import SubCarrossel from "../../components/home/subCarrossel";

const Home = () => {

    console.log(trendingCollections)

    return ( 
        <ScrollView style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.backgroundPrincipal} />
            <Marketplace/>
            <SubCarrossel title="Trending collections" data={trendingCollections}/>
            <SubCarrossel title="Top seller" data={topSeller}/>
        
        </ScrollView>
     );
}
 
export default Home;