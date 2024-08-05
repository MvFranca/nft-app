import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Statistics from "../screens/statistics";
import Explore from "../screens/explore";
import Profile from "../screens/profile";
import { StyleSheet, Text, View } from "react-native";
import { BlurView } from "@react-native-community/blur";

import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from "react-native-vector-icons/Entypo"

const tab = createBottomTabNavigator();

type TabProps = {
    home: undefined;
    statistics: undefined;
    explore: undefined;
    profile: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabProps>;

const TabRoutes = () => {
    return ( 
        <tab.Navigator 
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarBackground: () => (
                    <BlurView
                        style={styles.blurView}
                        blurType="light"
                        blurAmount={20}
                        reducedTransparencyFallbackColor="#2927821A" // Adicionando a cor de fallback
                    />
                ),
                tabBarStyle: styles.tab,
                tabBarLabel: '',
            }}
        >
            <tab.Screen name="home" component={Home}
                options={{
                    tabBarIcon: () => (
                        <Icon2 name="switch" size={20} color={"#000"}/>
                    )
                }}
            />
            <tab.Screen name="statistics" component={Statistics}
          />
            <tab.Screen name="more" component={Home}
            options={{
                tabBarIcon: () =>
                    <Text style={{marginTop: -60, fontSize: 50, color: "#FFF"}}>
                        +
                    </Text>
            }}
          />
            <tab.Screen name="explore" component={Explore}/>
            <tab.Screen name="profile" component={Profile}/>
        </tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tab: {
        borderTopEndRadius: 45,
        borderTopLeftRadius: 45,
        height: 90,
        overflow: "hidden",
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 0
    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default TabRoutes;
