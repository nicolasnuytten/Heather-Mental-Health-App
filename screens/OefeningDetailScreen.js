import React from 'react';
import { View, ImageBackground, ScrollView, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import data from "../assets/data/data.json";

export default class OefeningDetailScreen extends React.Component {
    static navigationOptions = {
        header: null,
        tabBarVisible: false,
    };

    render() {
        const { navigate } = this.props.navigation;
        const screen = this.props.navigation.state.params.screen;
        const item = this.props.navigation.state.params.item;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.arrow} onPress={() => navigate(screen)}>
                    <Image source={require("./../assets/images/back_arrow.png")} />
                </TouchableOpacity>
                <Image style={styles.image} source={require("./../assets/images/test_oefening.png")}></Image>
                <ImageBackground source={require("./../assets/images/background_cloud.png")} style={{ width: '100%', height: '100%', paddingTop: 40 }}>
                    <TouchableOpacity style={styles.startButton} onPress={() => navigate("AdemhalenOefening")}>
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                    <ScrollView style={styles.oefeningContainer}>
                        <Text style={styles.title}>{item.name}</Text>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", paddingBottom: 20 }}>
                                <View>
                                    <Text style={styles.subTitle}>Moeilijkheidsgraad</Text>
                                    <Image source={require('./../assets/images/stars_1.png')} alt={"Rating"}></Image>
                                </View>
                                <View style={{ paddingLeft: 60 }}>
                                    <Text style={styles.subTitle}>Tijd</Text>
                                    <Text style={[styles.text, styles.orange]}>{item.time}</Text>
                                </View>
                            </View>
                            <Text style={styles.subTitle}>Tags</Text>
                            <Text style={[styles.text, styles.orange]}>{item.tags}</Text>
                        </View>
                        <Text style={styles.subTitle}>Informatie</Text>
                        <Text style={[styles.text, styles.intro]}>{item.intro}</Text>
                        <View>
                            {item.steps.map(step => (
                                <View key={item.id}>
                                    <Text style={styles.stepTitle}>Stap 1</Text>
                                    <Text style={styles.text}>Ga rechtop staan en verdeel je gewicht over beide voeten zodat je stabiel staat.</Text>
                                </View>
                            ))}

                            
                        </View>

                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BDE2F6",
        paddingTop: 20,
        position: "relative"
    },
    arrow: {
        padding: 20
    },
    image: {
        zIndex: -10,
        marginTop: -55,
        marginBottom: -45,
        width: "100%"
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
        backgroundColor: "#104664",
        borderRadius: 10,
        width: 140,
        height: 40,
        marginTop: 420,
        justifyContent: "center",
        alignSelf: "center",
        zIndex: 10,
        position: "absolute"
    },
    buttonText: {
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 18
    }
});