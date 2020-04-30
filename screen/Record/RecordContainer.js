import React from "react";
// import { View, Text, Button } from "react-native";
import RecordPresenter from "./RecordPresenter";


export default ({ navigation, route: {
    params
} }) => {
    const title = "Record";
    return (
        <RecordPresenter {...title} navigation={navigation} />
    );
};