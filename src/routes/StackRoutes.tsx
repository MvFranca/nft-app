import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import Welcome from "../screens/welcome/index.tsx";
import Home from "../screens/home/index.tsx";
import TabRoutes, { TabTypes } from "./TabRoutes.tsx";



const stack = createNativeStackNavigator()

type StackNavigation = {
    welcome: undefined;
    tabroutes: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const StackNavigator = () => {
    return(
            <stack.Navigator initialRouteName="welcome" screenOptions={{
                headerShown: false
            }}>
                <stack.Screen name="welcome" component={Welcome}/>
                <stack.Screen name="tabroutes" component={TabRoutes}/>
            </stack.Navigator>
        
    )
}

export default StackNavigator;