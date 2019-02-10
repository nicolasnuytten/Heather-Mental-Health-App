import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default class Homescreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const { navigate } = this.props.navigation;
        return <View style={{ backgroundColor: '#BDE2F6', flex: 1 }}>
            <ImageBackground source={require("./../assets/images/background_mountains_faded.png")} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.arrow} onPress={() => navigate("OefeningDetail")}>
                        <Image source={require("./../assets/images/back_arrow.png")} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Gefocused ademhalen</Text>
                    <Text style={styles.subTitle}>Vul de zon en adem in, laat los en adem uit</Text>
                    <Image style={styles.zon} source={require("./../assets/images/zon.png")} />
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
    zon: {
        alignSelf: "center"
    }
});