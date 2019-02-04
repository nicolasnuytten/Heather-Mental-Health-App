import React from 'react';
import { View, StyleSheet, Text, Slider, Button, TouchableHighlight } from 'react-native';
import { Icon } from "react-native-elements";
import data from "../assets/data/data.json";

import firebase from "firebase";
require("firebase/firestore");
// firebase.initializeApp({
//   apiKey: "AIzaSyBUM4W5Y6xoNfF1DhT5hayi-thUAmmLmZU",
//   authDomain: "heather-app.firebaseapp.com",
//   projectId: "heather-app"
// });
var db = firebase.firestore();

export default class CreateMood2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "positive"}
  }

  static navigationOptions = {
    header: null,

  };

  handleButtonPos = () => {
    this.setState({
      tab: "positive"
    });
  };

  handleButtonNeg = () => {
    this.setState({
      tab: "negative"
    });
  };

  handleTag = (tag) => {
    console.log(tag);
  };

  handleData = () => {
    const { navigate} = this.props.navigation;
    console.log(this.props.navigation.state.params.id);
    // console.log(id);
    console.log("Adding 2 DB");
    // db.collection("users").add({
    //   slider2: 48,
    //   slider3: 79,
    //   tags2: ["Werk", "Sport"]
    // })
    //   .then(function (docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function (error) {
    //     console.error("Error adding document: ", error);
    //   });
    navigate("Home");
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Icon name="arrow-back" onPress={() => navigate("CreateMood")} />
          <Button title="Klaar" onPress={this.handleData} />
        </View>
        <View>
          <Text>Hoe was je dag?</Text>
          <View>
            <Text>Rustig</Text>
            <Text>Druk</Text>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={50}
            />
          </View>
          <View>
            <Text>Positief</Text>
            <Text>Negatief</Text>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={50}
            />
          </View>
          <Text>Wat heb je gedaan?</Text>
          <View>
            {
              data.tags_2.map(tag => (
                <TouchableHighlight key={tag.name} onPress={() => this.handleTag(tag.name)}>
                  <Text>{tag.name}</Text>
                </TouchableHighlight>
                ))
              }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 20
  }
});
