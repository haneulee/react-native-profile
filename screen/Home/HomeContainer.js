import React from "react";
// import { View, Text, Button } from "react-native";
import HomePresenter from "./HomePresenter";


export default ({ navigation, route: {
    params
} }) => {
    const title = "Home";
    return (
        <HomePresenter {...title} />
    );
};