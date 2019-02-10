import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, Slider } from 'react-native';
import { Icon } from "react-native-elements";
import data from "../assets/data/data.json"
let tagsList = [];

import firebase from "firebase";
require("firebase/firestore");
let db = firebase.firestore();

export default class CreateMood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "positive",
      slider1: 50,
      tags: []
    };
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
    tagsList.push(tag);
    this.setState({
      tags: tagsList
    })
  };

  handleData = () => {
    const { navigate } = this.props.navigation;
    const uid = this.props.navigation.state.params.uid;
    console.log(uid);

    const today = new Date();
    let d = today.getDate();
    let m = today.getMonth() + 1;
    if (d < 10) {
      d = '0' + d;
    }
    if (m < 10) {
      m = '0' + m;
    }

    console.log(this.state.slider1);
    console.log("Adding 2 DB");
    db.collection(uid)
      .add({
        uid: `${uid}`,
        date: `${d}/${m}`,
        slider1: this.state.slider1,
        tags1: tagsList
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        navigate("CreateMood2", { uid: uid, id: docRef.id });
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    tagsList = [];

  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          <Icon name="arrow-back" onPress={() => navigate("Home")} />
          <Button title="Volgende" onPress={this.handleData} />
        </View>
        <View>
          <Text>Hoe voel je je?</Text>
          {/* https://stackoverflow.com/questions/48089373/display-value-of-slider-with-respect-to-slider-thumb-react-native */}
          <Text>Goed</Text>
          <Text>Slecht</Text>
          <Slider
            step={1}
            minimumValue={0}
            maximumValue={100}
            value={this.state.slider1}
            onValueChange={val =>
              this.setState({
                slider1: val
              })
            }
          />
          <TouchableOpacity style={styles.button} onPress={this.handleButtonPos}>
            <Text style={styles.buttonText}>Positief</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleButtonNeg}>
            <Text style={styles.buttonText}>Negatief</Text>
          </TouchableOpacity>
          <View>
            {this.state.tab === "positive"
              ? data.tags_1.positive.map(tag => (
                <TouchableOpacity key={tag.name} onPress={() => this.handleTag(tag.name)}>
                  <Text >{tag.name}</Text>
                </TouchableOpacity>
              ))
              : data.tags_1.negative.map(tag => (
                <TouchableOpacity
                  key={tag.name}
                  onPress={() => this.handleTag(tag.name)}
                >
                  <Text>{tag.name}</Text>
                </TouchableOpacity>
              ))}
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
