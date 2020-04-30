import React from "react";
// import { View, Text, Button } from "react-native";
import FeedPresenter from "./FeedPresenter";


export default ({ navigation, route: {
    params
} }) => {
    const title = "Feed";
    return (
        <FeedPresenter {...title} loading={false} />
    );
};