import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppNavigator } from "react-navigation";

export default class VoltooidScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.container}>
        <TouchableHighlight>
        <Text style={styles.selected}>Voltooid</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate("Main")}>
          <Text>Reizen</Text>
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
