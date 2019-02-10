import React from 'react';
import { View, ScrollView, ImageBackground, StyleSheet, Text, TouchableOpacity, Image, Platform, ProgressBarAndroid, ProgressViewIOS } from 'react-native';
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
        <View style={styles.navHeader}>
          <TouchableOpacity onPress={() => navigate("Voltooid")} >
            <Text style={[styles.buttonText, styles.active]}>Voltooid</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("Reizen")} >
            <Text style={styles.buttonText}>Reizen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("Oefening")} >
            <Text style={styles.buttonText}>Oefenen</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.newButton} onPress={() => navigate("ReisToevoegen")} >
          <Image source={require("./../assets/images/new_button.png")} />
        </TouchableOpacity>

        <ImageBackground source={require("./../assets/images/background_cloud.png")} style={{ width: '100%', height: '100%', paddingTop: 60 }} >
          <ScrollView>
            <View style={styles.cards}>
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
    paddingTop: 20,
  },
  selected: {
    fontWeight: "bold"
  },
  navHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  newButton: {
    alignSelf: "center",
    paddingTop: 10
  },
  cards: {
    paddingBottom: 240,
    height: '100%'
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
  },
  buttonText: {
    fontSize: 18,
    color: "#86BCDA",
    paddingTop: 10
  },
  active: {
    fontSize: 24,
    color: "#104664",
    fontWeight: "bold"
  }
});
