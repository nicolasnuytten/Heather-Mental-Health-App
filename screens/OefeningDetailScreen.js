import React from 'react';
import { View, ImageBackground, ScrollView, Image, StyleSheet, Text, Button } from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppNavigator } from "react-navigation";
import data from "../assets/data/data.json";

export default class OefeningScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Icon style={styles.arrow} name="arrow-back" onPress={() => navigate("Oefening")} />
                <Image style={styles.image} source={require("./../assets/images/test_oefening.png")}></Image>
                <ImageBackground source={require("./../assets/images/background_cloud.png")} style={{ width: '100%', height: '100%', paddingTop: 40 }}>
                    <ScrollView style={styles.oefeningContainer}>
                        <Text style={styles.title}>Gefocused ademhalen</Text>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", paddingBottom: 20 }}>
                                <View>
                                    <Text style={styles.subTitle}>Moeilijkheidsgraad</Text>
                                    <Image source={require("./../assets/images/stars_1.png")}></Image>
                                </View>
                                <View style={{ paddingLeft: 60 }}>
                                    <Text style={styles.subTitle}>Tijd</Text>
                                    <Text style={[styles.text, styles.orange]}>5min</Text>
                                </View>
                            </View>
                            <Text style={styles.subTitle}>Tags</Text>
                            <Text style={[styles.text, styles.orange]}>Yoga, concentratie</Text>
                        </View>
                        <Text style={styles.subTitle}>Informatie</Text>
                        <Text style={[styles.text, styles.intro]}>De boomhouding is een basishouding binnen yoga en bevorderd je concentratie!</Text>
                        <View>
                            <Text style={styles.stepTitle}>Stap 1</Text>
                            <Text style={styles.text}>Ga rechtop staan en verdeel je gewicht over beide voeten zodat je stabiel staat.</Text>
                        </View>

                    </ScrollView>
                    <Button style={styles.startButton} title="Start" onPress={() => navigate("Oefeningen")} />
                </ImageBackground>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BDE2F6",
        paddingTop: 20
    },
    arrow: {
        padding: 20
    },
    image: {
        zIndex: -10,
        marginTop: -20,
        marginBottom: -45
    },
    oefeningContainer: {
        margin: 20
    },
    title: {
        color: "#F2994A",
        fontSize: 22,
        fontWeight: "bold",
        alignSelf: "center"
    },
    subTitle: {
        color: "#104664",
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 5
    },
    text: {
        color: "#104664",
        fontSize: 16,
    },
    infoContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: "#86BCDA"
    },
    orange: {
        color: "#F2994A"
    },
    intro: {
        paddingTop: 5
    },
    stepTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#86BCDA",
        paddingTop: 10,
        paddingBottom: 5
    },
    startButton: {

    }
});