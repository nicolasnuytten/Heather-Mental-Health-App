import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';
import data from "../assets/data/data.json";

export default class VoltooidScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarHidden: false
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Button style={styles.selected} title="Voltooid" onPress={() => navigate("Voltooid")} />
          <Button title="Reizen" onPress={() => navigate("Reizen")} />
          <View>
            {data.reizen.voltooid.map(reis => (
              <View key={reis.id} style={styles.card}>
                <Text>{reis.name}</Text>
                <Text>
                  Progressie: {reis.goals}/{reis.goals}
                </Text>
                <Text>{reis.date}</Text>
              </View>
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
    paddingTop: 20,
  },
  selected: {
    fontWeight: "bold"
  },
  card: {
    padding: 20
  }
});
