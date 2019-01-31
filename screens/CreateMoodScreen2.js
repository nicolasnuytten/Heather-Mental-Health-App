import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppNavigator } from "react-navigation";

export default class CreateMood2 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.container}>
      <Icon name="arrow-back" onPress={() => navigate("CreateMood")} />
        <TouchableHighlight onPress={() => navigate("Home")}>
          <Text>Klaar</Text>
        </TouchableHighlight>
      </View>;
  }
}

const handleProfile = () => {
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 20
  }
});
