import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Statistics from "../screens/statistics";
import Explore from "../screens/explore";
import Profile from "../screens/profile";
import { Image, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";

import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import { theme } from "../theme/fonts";
import { PortalProvider } from "react-native-portal";

const Tab = createBottomTabNavigator();

type TabProps = {
    home: undefined;
    statistics: undefined;
    explore: undefined;
    profile: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabProps>;

const TabRoutes = () => {
    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false,
                tabBarBackground: () => (
                    <BlurView 
                    style={styles.blurView}
                    blurType="light"
                    blurAmount={20}
                    reducedTransparencyFallbackColor="rgba(0, 0, 0, 0.5)"
                    />
            ),
                tabBarStyle: styles.tab,
                tabBarLabel: '',
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ size }) => (
                        <Icon name="home" size={size+5} color={theme.colors.white} />
                    ),
                }}
            />
            <Tab.Screen
                name="statistics"
                component={Statistics}
                options={{
                    tabBarIcon: ({ size }) => (
                        <Icon2 name="bar-graph" size={size} color={theme.colors.white} />
                    ),
                }}
            />
            <Tab.Screen
                name="more"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Image
                            style={{ marginTop: -80, position: "absolute" }}
                            source={require("../assets/tabBar/more.png")}
                            width={70}
                            height={70}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="chat"
                component={Explore}
                options={{
                    tabBarIcon: ({ size }) => (
                        <Icon3 name="chat" size={size} color={theme.colors.white} />
                    ),
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ size }) => (
                        <Icon name="user" size={size} color={theme.colors.white} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tab: {
        borderTopEndRadius: 45,
        borderTopLeftRadius: 45,
        height: 90,
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 0,
        backgroundColor: "transparent",
        overflow: 'hidden',

    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#0000005b', 

    },
});

export default TabRoutes;
