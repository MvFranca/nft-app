import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from 'react-native';
import { theme } from "../../theme/fonts";
import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/StackRoutes";
import { useState } from "react";
import { getUserData, login } from "../../services/login";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

    const navigation = useNavigation<StackTypes>()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function loginUser(){

      const { success, message, user } = login(email, password)

    
    
      if (success) {
        try {
            await AsyncStorage.setItem('@user', JSON.stringify(user));
            navigation.navigate("tabroutes")
        } catch (error) {
            console.error('Failed to store user data', error);
        }
      } 



      // else {
      //     console.log(message);
      // }

    }

    return ( 
        <View style={styles.container}>
            <BlurView
              style={styles.blurContainer}
              blurType="light"
              blurAmount={20}
            />
            <TextInput
                id='email'
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={theme.colors.white}
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(e) => setEmail(e)}
            />
            <TextInput
                id='password'
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={theme.colors.white}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                value={password}
                onChangeText={(e) => setPassword(e)}
            ></TextInput>
            <View style={styles.containerOptions}>
                <TouchableOpacity style={styles.button}
                  onPress={loginUser}
                >
                    <BlurView
                        style={styles.blurButton}
                        blurType="light"
                        blurAmount={67}
                        reducedTransparencyFallbackColor="rgba(0, 0, 0, 0.389)"
                    />
                    <Text style={styles.textButton}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.createAccount}>
                        Create account now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
    borderRadius: 15,
    padding: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.colors.gray,
    gap: 5
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fcf8f8e', 
  },
  input: {
    backgroundColor: "#2323235c",

    color: theme.colors.white,
    padding: 10,
    borderRadius: 7,
    width: "100%",
    paddingVertical: 10,
    
    borderWidth: 1,
    borderColor: theme.colors.black

  },
  containerOptions: {
    width: "100%",
    marginTop: 5,
    gap: 5
  },
  blurButton: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#020f1318', 
  },
  button: {
    overflow: "hidden",
    backgroundColor: "#2323235c",
    padding: 10,
    borderRadius: 7,
    width: "100%",
    
    borderWidth: 1,
    borderColor: theme.colors.black
  },
  textButton: {
    textAlign: "center",
    color: theme.colors.white,
    fontWeight: "bold",

  },
  createAccount: {
    textAlign: "center",
    color: theme.colors.white,
    textDecorationLine: "underline"
  }
});
 
export default Login;