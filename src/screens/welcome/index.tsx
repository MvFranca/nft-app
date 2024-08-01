import React from 'react'
import {ImageBackground, Text, View} from 'react-native'
import {styles} from "./styles" 
import ExploreStarted from '../../components/welcome';

function Welcome(): React.JSX.Element {
    return(
        <ImageBackground source={require("../../assets/background-welcome.png")} style={styles.imageContainer}>

            <Text style={styles.titleWelcome}>Welcome to NFT Marketplace</Text>

            <ExploreStarted />

        </ImageBackground>
    )
}

export default Welcome;
