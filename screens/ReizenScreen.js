import React from 'react';
import { ImageBackground, View, ScrollView, StyleSheet, Text, TouchableOpacity, Platform, ProgressBarAndroid, ProgressViewIOS, Image } from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppNavigator } from "react-navigation";
import data from "../assets/data/data.json";
import { bold } from 'ansi-colors';
import { AsyncStorage } from 'react-native';

let oefList = [];
export default class ReizenScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oefList: [],
    };
  }

  static navigationOptions = {
    header: null,
  };
  // componentDidMount = async() => {
  //   // this.setState({oefList:[]})
  //   // await AsyncStorage.clear();
  //   console.log(oefList)
  //     await AsyncStorage.getAllKeys().then((value) => {
  //       value.map( item => {
  //         if (!item.startsWith('firebase')){
  //           console.log(item);
  //           oefList.push(value);
  //           this.setState({ oefList })
  //         }
  //       })
  //       // console.log(value);

  //     });
  // };

  componentDidUpdate = () => {
    console.log("component did update!")
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.navHeader}>
          <TouchableOpacity onPress={() => navigate("Voltooid")} >
            <Text style={styles.buttonText}>Voltooid</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("Reizen")} >
            <Text style={[styles.buttonText, styles.active]}>Reizen</Text>
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
            {oefList.map( oef => (
              <Text key={oef}>{oef}</Text>
            ))}
            <View style={styles.cards}>
              {data.reizen.reizen.map(reis => (
                <TouchableOpacity onPress={() => navigate("ReisDetail")} key={reis.id}>
                  <View style={styles.card}>
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
                </TouchableOpacity>
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
    justifyContent: "space-around",
    alignItems: "center"
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
