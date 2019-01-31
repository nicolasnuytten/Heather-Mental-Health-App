import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppNavigator } from "react-navigation";

export default class OefeningScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.container}>
        <TouchableHighlight onPress={() => navigate("Main")}>
          <Text>Reizen</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.selected}>Oefening</Text>
        </TouchableHighlight>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 20,
    flexDirection: "row",
    textAlign: "center"
  },
  selected: {
    fontWeight: "bold"
  }
});
