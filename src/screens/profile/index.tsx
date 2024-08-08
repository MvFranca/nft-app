import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearUserData, getUserData } from "../../services/login";
import { Text } from "react-native";
import { StackTypes } from "../../routes/StackRoutes";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../theme/fonts";
import Title from "../../components/layout/Title";
import Subtitle from "../../components/layout/Subtitle";
import { userData } from "../../types/user";

const Profile = () => {

    const navigation = useNavigation<StackTypes>()
    const [user, setUser] = useState<userData>({} as userData)

    async function userData(){
        const user = await getUserData()
        setUser(user)
    }

    useEffect(() => {
        userData()
    }, [])

    return ( 
        <View style={styles.container}>
            <View>
                <Title >
                   {user.name}
                </Title>
                <Subtitle >
                   {user.email}
                </Subtitle>
            </View>
   

            <TouchableOpacity onPress={() => {
                clearUserData()
                navigation.navigate("welcome")
            }}>
                <Text style={{color: "#ff0000", fontWeight: "bold"}}>
                    SAIR
                </Text>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.backgroundPrincipal,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    }
})
 
export default Profile;