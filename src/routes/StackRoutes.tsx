import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "../screens/welcome/index.tsx";
import { NavigationContainer } from "@react-navigation/native";


const stack = createNativeStackNavigator()

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="welcome">
                <stack.Screen name="welcome" component={Welcome}/>

            </stack.Navigator>
        </NavigationContainer>
        
    )
}

export default StackNavigator;