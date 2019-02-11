import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, Animated, Easing, TouchableWithoutFeedback } from 'react-native';

export default class Homescreen extends React.Component {
    constructor(props) {
        super(props)
        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
    }

    static navigationOptions = {
        header: null,
    };

    componentWillMount() {
        this.animatedValue = new Animated.Value(.05);
    }

    handlePressIn = () => {
        Animated.spring(this.animatedValue, {
            toValue: 1,
            duration: 5000
        }).start()
    };

    handlePressOut = () => {
        Animated.spring(this.animatedValue, {
            toValue: .05,
            friction: 10,
            tension: 40,
            duration: 5000
        }).start()
    };

    render() {
        const animatedStyle = {
            transform: [{ scale: this.animatedValue }]
        }
        const { navigate } = this.props.navigation;
        return <View style={{ backgroundColor: '#E3F5FF', flex: 1 }}>
            <ImageBackground source={require("./../assets/images/background_oefening.png")} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.arrow} onPress={() => navigate("OefeningDetail")}>
                        <Image source={require("./../assets/images/back_arrow.png")} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Gefocused ademhalen</Text>
                    <Text style={styles.subTitle}>Vul de zon en adem in, laat los en adem uit</Text>
                    <Image style={styles.sunBackground} source={require("./../assets/images/background_zon.png")} />

                    <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
                        <Animated.Image style={[styles.sun, animatedStyle]} source={require("./../assets/images/zon.png")} />
                        {/* <Animated.View style={[styles.button, animatedStyle]}>
                            <Text style={styles.text}>Press Me</Text>
                        </Animated.View> */}
                    </TouchableWithoutFeedback>

                </View>
            </ImageBackground>
        </View>;

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#104664",
        alignSelf: "center",
        marginTop: -40
    },
    subTitle: {
        fontSize: 18,
        color: "#86BCDA",
        alignSelf: "center",
        width: "50%",
        textAlign: "center",
        paddingTop: 10
    },
    arrow: {
        padding: 20
    },
    sunBackground: {
        alignSelf: "center",
        marginTop: 50
    },
    sun: {
        alignSelf: "center",
        marginTop: 167,
        position: "absolute"
    },
    button: {
        backgroundColor: "#333",
        width: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#FFF"
    }
});