import React from 'react';
import { View, StyleSheet, Text, Slider, Button, TouchableHighlight } from 'react-native';
import { Icon } from "react-native-elements";
import data from "../assets/data/data.json";

import firebase from "firebase";
require("firebase/firestore");
let db = firebase.firestore();

let tagsList = [];

export default class CreateMood2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider2: 50,
      slider3: 50,
      tags: [] 
    }
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
    });
  };

  handleData = () => {
    const { navigate} = this.props.navigation;
    const uid = this.props.navigation.state.params.uid;
    const id = this.props.navigation.state.params.id;
    db.collection(uid).doc(id).update({
      slider2: this.state.slider2,
      slider3: this.state.slider3,
      tags2: tagsList
    });
    
    tagsList = [];
    console.log("Adding 2 DB");

    navigate("Home", {update: true});
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
              value={this.state.slider2}
              onValueChange={val =>
                this.setState({
                  slider2: val
                })
              }
            />
          </View>
          <View>
            <Text>Positief</Text>
            <Text>Negatief</Text>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={this.state.slider3}
              onValueChange={val =>
                this.setState({
                  slider3: val
                })
              }
            />
          </View>
          <Text>Wat heb je gedaan?</Text>
          <View>
            {data.tags_2.map(tag => (
              <TouchableHighlight
                key={tag.name}
                onPress={() => this.handleTag(tag.name)}
              >
                <Text>{tag.name}</Text>
              </TouchableHighlight>
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
