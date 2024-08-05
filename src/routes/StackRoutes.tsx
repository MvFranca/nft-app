import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Welcome from "../screens/welcome/index.tsx";
import Home from "../screens/home/index.tsx";
import TabRoutes from "./TabRoutes.tsx";

const Stack = createNativeStackNavigator();

type StackNavigation = {
    welcome: undefined;
    tabroutes: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const StackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="tabroutes" component={TabRoutes}/>
            <Stack.Screen name="welcome" component={Welcome}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;
