import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import data from "../assets/data/data.json";

const item = data.test;
let index = 0;

export default class TestScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    static navigationOptions = {
        header: null,
    };

    handleAnswer = answer => {
        const { navigate } = this.props.navigation;
        if (index <= 7) {
            index += 1;
            this.setState({
                index: index
            });
        } else {
            index = 0;
            this.setState({
                index: index
            });
            navigate("Oefening");
        }

    };

    render() {
        //console.log(item);
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.number}>{item[index].id}/9</Text>
                <Image source={{ url: item[index].img }} style={{ width: 174, height: 184, alignSelf: "center", margin: 30 }}></Image>
                <Text style={styles.category}>{item[index].category}</Text>
                <Text style={styles.question}>{item[index].question}</Text>
                <View style={styles.answers}>
                    <TouchableOpacity style={styles.answer} onPress={() => this.handleAnswer(item[index].answer1)}>
                        <Text style={styles.buttonText}>{item[index].answer1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.answer} onPress={() => this.handleAnswer(item[index].answer1)}>
                        <Text style={styles.buttonText} > {item[index].answer2}</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require("./../assets/images/background_test.png")} style={{ width: 375, height: 123 }} />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#BDE2F6",
        paddingTop: 20
    },
    number: {
        alignSelf: "center",
        padding: 10,
        fontSize: 22,
        fontWeight: "bold",
        color: "#104664"
    },
    category: {
        alignSelf: "center",
        padding: 10,
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    question: {
        alignSelf: "center",
        padding: 20,
        fontSize: 18,
        color: "#104664"
    },
    answers: {
        flexDirection: "row",
        alignSelf: "center",
        width: "80%",
        justifyContent: "space-between"
    },
    answer: {
        backgroundColor: "#104664",
        borderRadius: 10,
        width: 140,
        height: 40,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 18
    }
});