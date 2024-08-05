import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Statistics from "../screens/statistics";
import Explore from "../screens/explore";
import Profile from "../screens/profile";
import { Image, StyleSheet, Text, View } from "react-native";
import { BlurView } from "@react-native-community/blur";

import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from "react-native-vector-icons/Entypo"
import Svg, { Circle, Rect } from 'react-native-svg';
import { theme } from "../theme/fonts";

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
                // tabBarBackground: () => (
  
                // ),
                tabBarStyle: styles.tab,
                tabBarLabel: '',
            }}
        >
            <tab.Screen name="home" component={Home}
                options={{
                    tabBarIcon: ({size}) => (
                        <Icon name="home" size={30} color={theme.colors.white}/>
                    )
                }}
            />
            <tab.Screen name="statistics" component={Statistics}
                options={{
                    tabBarIcon: ({size}) => (
                        <Icon2 name="bar-graph" size={size} color={theme.colors.white}/>
                    )
                }}
          />
            <tab.Screen name="more" component={Home}
            options={{
                tabBarIcon: () =>
                    <Image style={{marginTop: -80}} source={require("../assets/tabBar/more.png")} width={70} height={70} />
            }}
          />
            <tab.Screen name="explore" component={Explore}
                options={{
                    tabBarIcon: ({size}) => (
                        <Icon name="search" size={size} color={theme.colors.white}/>
                    )
                }}
            />
            <tab.Screen name="profile" component={Profile}
                  options={{
                    tabBarIcon: ({size}) => (
                        <Icon name="user" size={size} color={theme.colors.white}/>
                    )
                }}
            />
        </tab.Navigator>
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
        backgroundColor: "#472945"
    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
        borderTopEndRadius: 45,
        borderTopLeftRadius: 45,
        height: 90,
    }
});

export default TabRoutes;
