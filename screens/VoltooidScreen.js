import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button, Platform, ProgressBarAndroid, ProgressViewIOS } from 'react-native';
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
          <Button
            style={styles.selected}
            title="Voltooid"
            onPress={() => navigate("Voltooid")}
          />
          <Button title="Reizen" onPress={() => navigate("Reizen")} />
          <Button title="+" onPress={() => navigate("ReisToevoegen")} />
          <View>
            {data.reizen.voltooid.map(reis => (
              <View key={reis.id} style={styles.card}>
                <Text style={styles.cardName}>{reis.name}</Text>
                <View style={styles.cardProgress}>
                  <Text style={styles.cardProgressTitles}>
                    Progressie: {reis.goals}/{reis.goals}
                  </Text>
                  <Text style={styles.cardProgressTitles}>{reis.date}</Text>
                </View>
                <View style={styles.progressBar}>
                  {
                    (Platform.OS === 'android')
                      ?
                      (<ProgressBarAndroid styleAttr="Horizontal" progress={1} indeterminate={false} />)
                      :
                      (<ProgressViewIOS progress={1} />)
                  }
                </View>
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
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#BDE2F6"
  },
  cardName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#104664",
    paddingBottom: 10
  },
  cardProgress: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardProgressTitles: {
    color: "#86BCDA",
    fontSize: 16
  },
  progressBar: {
    marginTop: 10,
    padding: 2,
    borderRadius: 10,
    backgroundColor: "#86BCDA"
  }
});
