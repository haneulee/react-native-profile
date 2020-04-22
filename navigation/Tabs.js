import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home/index";
import Profile from '../screen/Profile/index'
import Chat from '../screen/Chat/index'
import Feed from '../screen/Feed/index'
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) => route ?.state ?.routeNames[route.state.index] || "Profile";

export default ({ navigation, route }) => {
    useLayoutEffect(() => {
        const name = getHeaderName(route);
        // console.log(route)
        navigation.setOptions({
            title: name
        });
    }, [route]);

    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if (route.name === "Home") {
                        iconName += "home";
                    } else if (route.name === "Profile") {
                        iconName += "people";
                    } else if (route.name === "Chat") {
                        iconName += "chatboxes";
                    } else if (route.name === "Feed") {
                        iconName += "heart";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            color={focused ? "black" : "grey"}
                            size={26}
                        />
                    );
                }
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    // backgroundColor: "black",
                    // borderTopColor: "black"
                }
            }}>
            <Tabs.Screen name='Profile' component={Profile}></Tabs.Screen>
            <Tabs.Screen name='Home' component={Home}></Tabs.Screen>
            <Tabs.Screen name='Chat' component={Chat}></Tabs.Screen>
            <Tabs.Screen name='Feed' component={Feed}></Tabs.Screen>
        </Tabs.Navigator>)
}