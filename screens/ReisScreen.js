import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';
import { Svg } from "expo";
const { Circle, Rect, G, Path, Mask,  } = Svg;

export default class Moodscreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <View style={styles.container}>
        
      </View>;
  }
}

async function getData() {
  try {
    let response = await fetch(
      "../assets/data/data.json"
    );
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 20
  }
});
