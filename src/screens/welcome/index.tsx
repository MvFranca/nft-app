import React, { useEffect } from 'react'
import {ImageBackground, Text, View} from 'react-native'
import {styles} from "./styles" 
import ExploreStarted from '../../components/welcome';
import Login from '../login';
import { getUserData } from '../../services/login';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/StackRoutes';

function Welcome(){

    const navigation = useNavigation<StackTypes>()

    async function userData(){
       const user = await getUserData()

    //    if(user) navigation.navigate("tabroutes")
    }

    useEffect(() => {
        userData()
    }, [])

    return(
        <ImageBackground source={require("../../assets/background-welcome.png")} style={styles.imageContainer}>

            <Text style={styles.titleWelcome}>Welcome to NFT Marketplace</Text>

            <View style={styles.containerAnimated}>
                <ExploreStarted />
                <Login />
            </View>
        </ImageBackground>
    )
}

export default Welcome;
