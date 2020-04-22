import React from "react";
// import { View, Text, Button } from "react-native";
import ProfilePresenter from "./ProfilePresenter";


export default ({ navigation, route: {
    params
} }) => {
    const title = "Profile";
    return (
        <ProfilePresenter {...title} />
    );
};