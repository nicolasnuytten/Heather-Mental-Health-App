import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import data from "../assets/data/data.json";

export default class OefeningScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Button title="Reizen" onPress={() => navigate("Reizen")} />
          <Button title="Oefening" onPress={() => navigate("Oefening")} />
        </View>
        <TextInput
          style={styles.textInput}
          value={"Stress, ontspanning,..."}
        />
        <View>
          {data.reizen.oefening.map(item => (
            <View key={item.id} style={styles.card}>
              <Text>{item.name}</Text>
              <Text>{item.tags}</Text>
              <Text>{item.time}</Text>
              <Text>{item.rate}</Text>
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
    paddingTop: 20
  },
  selected: {
    fontWeight: "bold"
  },
  card: {
    padding: 20
  },
  textInput: {
    backgroundColor: "#86BCDA"
  },
});
