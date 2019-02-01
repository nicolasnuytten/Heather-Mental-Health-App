import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Button } from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppNavigator } from "react-navigation";
import data from "../assets/data/data.json";

export default class ReizenScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    // console.log(data);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Button title="Voltooid" onPress={() => navigate("Voltooid")} />
        <Button title="Reizen" onPress={() => navigate("Reizen")} />
        <Button title="Oefening" onPress={() => navigate("Oefening")} />
        <Button title="+" onPress={() => navigate("ReisToevoegen")} />

        <View>
          {data.reizen.reizen.map(reis => (
            <View key={reis.id} style={styles.card}>
              <Text>{reis.name}</Text>
              <Text>
                Progressie: {reis.goalsDone}/{reis.goalsTotal}
              </Text>
              <Text>{reis.started} geleden gestart</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 20,
  },
  selected: {
    fontWeight: "bold"
  },
  card: {
    padding: 20
  }
});
