import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Audio } from 'expo-av';
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";

export default ({ refreshFn, loading, title }) => {
    const navigation = useNavigation();
    const goToRecord = () => {
        navigation.navigate('Record', {})
    }

    return (<ScrollContainer refreshFn={refreshFn} loading={loading}>
        {/* <Container> */}
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={require('../../assets/profile.jpg')} />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>이하늘</Text>
                    {/* <Text style={styles.info}>개발자</Text> */}
                    <View style={styles.listWrap}>
                        <View style={styles.list}><FontAwesome name={'file-audio-o'} color="#665EFF" size={22} /></View>
                        <View style={styles.list}><TouchableOpacity onPress={goToRecord}><Text style={styles.record}>레벨 테스트</Text></TouchableOpacity></View>
                    </View>
                    <View style={styles.listWrap}>
                        <View style={styles.list}><Text>직업</Text></View>
                        <View style={styles.list}><Text>개발자</Text></View>
                    </View>
                    <View style={styles.listWrap}>
                        <View style={styles.list}><Text>나이</Text></View>
                        <View style={styles.list}><Text>31</Text></View>
                    </View>
                    <View style={styles.listWrap}>
                        <View style={styles.list}><Text>관심사</Text></View>
                        <View style={styles.list}><Text>여행, 영어</Text></View>
                    </View>
                    <View style={styles.listWrap}>
                        <View style={styles.list}><Text>관심사</Text></View>
                        <View style={styles.list}><Text>여행, 영어</Text></View>
                    </View>
                    <View style={styles.listWrap}>
                        <View style={styles.list}><Text>관심사</Text></View>
                        <View style={styles.list}><Text>여행, 영어</Text></View>
                    </View>
                    <View style={styles.listWrap}>
                        <View style={styles.list}><Text>관심사</Text></View>
                        <View style={styles.list}><Text>여행, 영어</Text></View>
                    </View>
                </View>

            </View>
        </View>
        {/* </Container> */}
    </ScrollContainer>)
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#665EFF',
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600",
        padding: 20
    },
    info: {
        fontSize: 16,
        color: "#665EFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    list: {
        width: '50%',
        backgroundColor: 'powderblue',
        // textAlign: 'center',
        padding: 20
    },
    listWrap: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
    },
    record: {
        color: '#665EFF',
        paddingTop: 3
    }
});
