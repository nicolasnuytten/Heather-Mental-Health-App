import React from 'react';
import { View, ImageBackground, ScrollView, Image, StyleSheet, Text, TextInput, Button, TouchableOpacity } from "react-native";
import data from "../assets/data/data.json";
import { bold } from 'ansi-colors';

const selectedList = [];
// const maximum = 7;
// const number = 0;

export default class ReisToevoegenScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            active: "none"
        };
    }

    static navigationOptions = {
        header: null,
        tabBarVisible: false,
    };

    handleSelect = (item) => {
        console.log(item);
        if (selectedList.includes(item)) {
            index = selectedList.indexOf(item);
            selectedList.splice(index, 1);
            //this.setState({ active: "none" });
        } else {
            selectedList.push(item);
            //this.setState({ active: "" });
        }

        console.log(selectedList);
        this.setState({
            selected: selectedList
        })
    };

    // handleData = () => {

    // };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Nieuwe reis</Text>
                <View style={styles.navHeader}>
                    <TouchableOpacity style={styles.arrow} onPress={() => navigate("Reizen")}>
                        <Image source={require("./../assets/images/back_arrow.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate("ReisToevoegen2")}>
                        <Text style={styles.buttonText}>Verder</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subTitle}>Selecteer oefeningen voor je reis</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Stress, ontspanning,..."}
                />

                <ImageBackground source={require("./../assets/images/background_cloud.png")} style={{ width: '100%', height: '100%', paddingTop: 60 }} >
                    <ScrollView>
                        <View style={styles.cards}>
                            {data.reizen.oefening.map(item => (
                                <TouchableOpacity style={{ width: '50%' }} key={item.id} onPress={() => this.handleSelect(item)}>
                                    <View>
                                        <View display={this.state.active} style={styles.selectedIcon}>
                                            <Text style={styles.selectedText}>1</Text>
                                        </View>
                                        <View style={styles.card}>
                                            <View>
                                                <Text style={styles.cardName}>{item.name}</Text>
                                                <Text style={styles.cardTags}>{item.tags}</Text>
                                            </View>
                                            <View style={styles.cardBottom}>
                                                <Text style={[styles.cardTags, styles.cardTime]}>{item.time}</Text>
                                                <Image source={require("./../assets/images/stars_1.png")} />
                                                {/* <Text>{item.rate}</Text> */}
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BDE2F6",
        paddingTop: 30
    },
    selected: {
        fontWeight: "bold"
    },
    navHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginTop: -25,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 22,
        color: "#104664",
        fontWeight: "bold",
        alignSelf: "center"
    },
    subTitle: {
        fontSize: 20,
        color: "#104664",
        alignSelf: "center"
    },
    textInput: {
        backgroundColor: "#86BCDA",
        margin: 20,
        borderRadius: 20,
        padding: 10,
        color: "#BDE2F6",
        fontSize: 16
    },
    cards: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 160,
        height: '100%'
    },
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: "#FFF3C1",
        height: 132,
        justifyContent: "space-between",
        borderRadius: 10,
        position: "relative"
    },
    cardName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#104664"
    },
    cardTags: {
        fontSize: 16,
        color: "#F2994A"
    },
    cardBottom: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardTime: {
        fontWeight: "bold"
    },
    selectedIcon: {
        width: 40,
        height: 40,
        backgroundColor: "#86BCDA",
        borderRadius: 20,
        position: "absolute",
        zIndex: 100,
        justifyContent: "center",
        alignSelf: "flex-end",
        marginTop: -8,
        marginRight: -15
    },
    selectedText: {
        alignSelf: "center",
        fontSize: 20
    },
    hidden: {
        display: "none"
    },
    buttonText: {
        fontSize: 18,
        color: "#104664"
    }

});