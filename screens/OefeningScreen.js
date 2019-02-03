import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import data from "../assets/data/data.json";
import { bold } from 'ansi-colors';

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
        <View style={styles.cards}>
          {data.reizen.oefening.map(item => (
            <View key={item.id} style={styles.card}>
              <View>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardTags}>{item.tags}</Text>
              </View>
              <View style={styles.cardBottom}>
                <Text style={[styles.cardTags, styles.cardTime]}>{item.time}</Text>
                {/* <Image source={require("./../assets/images/stars_" + { item.rate } + ".png")} /> */}
                <Text>{item.rate}</Text>
              </View>
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
    padding: 10
  },
  selected: {
    fontWeight: "bold"
  },
  textInput: {
    backgroundColor: "#86BCDA",
    margin: 10,
    borderRadius: 20,
    padding: 10,
    color: "#BDE2F6",
    fontSize: 16
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF3C1",
    width: '44%',
    height: 132,
    justifyContent: "space-between",
    borderRadius: 10
  },
  cardName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#104664"
  },
  cardTags: {
    fontSize: 16,
    color: "#F2994A"
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardTime: {
    fontWeight: "bold"
  }
});
