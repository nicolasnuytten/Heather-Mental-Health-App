import React from 'react';
import { ImageBackground, View, ScrollView, StyleSheet, Text, TouchableHighlight, Button, Platform, ProgressBarAndroid, ProgressViewIOS, Image } from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppNavigator } from "react-navigation";
import data from "../assets/data/data.json";
import { bold } from 'ansi-colors';
//import { url } from 'inspector';

export default class ReizenScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    // console.log(data);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.navHeader}>
          <Button title="Voltooid" onPress={() => navigate("Voltooid")} />
          <Button title="Reizen" onPress={() => navigate("Reizen")} />
          <Button title="Oefening" onPress={() => navigate("Oefening")} />
        </View>
        <TouchableHighlight style={styles.newButton} onPress={() => navigate("ReisToevoegen")} >
          <Image source={require("./../assets/images/new_button.png")} />
        </TouchableHighlight>

        <ImageBackground source={require("./../assets/images/background_cloud.png")} style={{ width: '100%', height: '100%', paddingTop: 60 }} >
          <ScrollView>
            <View style={styles.cards}>
              {data.reizen.reizen.map(reis => (
                <View key={reis.id} style={styles.card}>
                  <Text style={styles.cardName}>{reis.name}</Text>
                  <View style={styles.cardProgress}>
                    <Text style={styles.cardProgressTitles}>
                      Progressie: {reis.goalsDone}/{reis.goalsTotal}
                    </Text>
                    <Text style={styles.cardProgressTitles}>{reis.started} geleden gestart</Text>
                  </View>
                  <View style={styles.progressBar}>
                    {
                      (Platform.OS === 'android')
                        ?
                        (<ProgressBarAndroid styleAttr="Horizontal" progress={.5} indeterminate={false} />)
                        :
                        (<ProgressViewIOS progress={.5} />)
                    }
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </ImageBackground>
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
  navHeader: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  newButton: {
    alignSelf: "center",
    paddingTop: 10
  },
  cards: {
    paddingBottom: 160,
    height: '100%'
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#D6F1FF",
    borderRadius: 10
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
    color: "#104664",
    fontSize: 16
  },
  progressBar: {
    marginTop: 10,
    padding: 2,
    borderRadius: 10,
    backgroundColor: "#104664"
  }
});
