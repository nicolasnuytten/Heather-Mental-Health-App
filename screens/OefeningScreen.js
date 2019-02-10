import React from 'react';
import { View, ImageBackground, ScrollView, FlatList, Image, StyleSheet, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { List, ListItem, SearchBar } from 'react-native-elements';
import data from "../assets/data/data.json";
import { bold } from 'ansi-colors';

export default class OefeningScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.navHeader}>
          <TouchableOpacity onPress={() => navigate("Voltooid")} >
            <Text style={styles.buttonText}>Voltooid</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("Reizen")} >
            <Text style={styles.buttonText}>Reizen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("Oefening")} >
            <Text style={[styles.buttonText, styles.active]}>Oefenen</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder={"Stress, ontspanning,..."}
        />
        <Button title="Test" onPress={() => navigate("Test")} />

        <ImageBackground source={require("./../assets/images/background_cloud.png")} style={{ width: '100%', height: '100%', paddingTop: 60 }} >
          <ScrollView>
            <View style={styles.cards}>
              {data.reizen.oefening.map(item => (
                <TouchableOpacity style={{ width: '50%' }} key={item.id} onPress={() => navigate("OefeningDetail")}>
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
    paddingTop: 20
  },
  selected: {
    fontWeight: "bold"
  },
  navHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
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
    borderRadius: 10
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
  buttonText: {
    fontSize: 18,
    color: "#86BCDA",
    paddingTop: 10
  },
  active: {
    fontSize: 24,
    color: "#104664",
    fontWeight: "bold"
  }
});
