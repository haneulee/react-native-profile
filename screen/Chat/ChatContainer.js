import React from "react";
// import { View, Text, Button } from "react-native";
import ChatPresenter from "./ChatPresenter";


export default ({ navigation, route: {
    params
} }) => {
    const title = "Chat";
    return (
        <ChatPresenter {...title} />
    );
};