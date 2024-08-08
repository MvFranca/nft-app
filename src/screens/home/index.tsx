import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { style } from "./styles";
import Marketplace from "../../components/home/marketplace/Marketplace";
import { theme } from "../../theme/fonts";
import { topSeller, trendingCollections } from "../../mocks/home";
import SubCarrossel from "../../components/home/subCarrossel";

const Home = () => {

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if(topSeller.length > 0 && trendingCollections.length > 0){
            console.log("foii")
            setLoading(false)
        }
    }, [topSeller, trendingCollections])

    return ( 
        <ScrollView style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.backgroundPrincipal} />
            {
                !loading && 
                <>
                    <Marketplace/>
                    <SubCarrossel title="Trending collections" data={trendingCollections}/>
                    <SubCarrossel title="Top seller" data={topSeller}/>
                    <Text>home</Text>
                </>
            }
        </ScrollView>
     );
}
 
export default Home;