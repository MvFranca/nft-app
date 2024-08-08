import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Welcome from "../screens/welcome/index.tsx";
import Home from "../screens/home/index.tsx";
import TabRoutes from "./TabRoutes.tsx";
import MessageAll from '../components/chat/MessageAll.tsx';
import { theme } from '../theme/fonts.ts';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    welcome: undefined;
    tabroutes: undefined;
    chatMessage: {
        id: string;
        name: string;
    };
};
export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const StackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="tabroutes" component={TabRoutes}/>
            <Stack.Screen name="welcome" component={Welcome}/>
            <Stack.Screen 
               name="chatMessage"
               component={MessageAll}
               
               options={{
                   headerShown: true,
                   headerStyle: {
                       backgroundColor: "#00000054",
                   },
                   headerTitleStyle: {
                       color: theme.colors.white
                   }
               }}
            />
        </Stack.Navigator>
    );
}

export default StackNavigator;
