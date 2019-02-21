import React from 'react';
import { ImageBackground, View, ScrollView, StyleSheet, Text, TouchableOpacity, Platform, ProgressBarAndroid, ProgressViewIOS, Image } from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppNavigator } from "react-navigation";
import data from "../assets/data/data.json";
import { bold } from 'ansi-colors';
import { AsyncStorage } from 'react-native';

export default class ReizenScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reisList: []
    };
  }

  static navigationOptions = {
    header: null,
  };
  componentDidMount = async() => {
    // this.setState({ reisList: []})
    // AsyncStorage.clear();  
      // reisList = [];
      await AsyncStorage.getAllKeys()
      .then(keys => {
        keys.map(item => {
          // console.log(item);
          if (!item.includes('firebase')){
            console.log("name", item);
            AsyncStorage.getItem(item)
            .then(req => JSON.parse(req))
            .then(reisList => {
              this.setState({ reisList: [...this.state.reisList, ...reisList] })
            })
            .catch(error => console.log('error!'));
          }
        })
      });    
  };
  removeReis = (oef) => {
    console.log(oef);
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
            {this.state.reisList.map( oef => (
              <TouchableOpacity onPress={() => navigate("ReisDetail")} style={{margin: 10, backgroundColor: '#D6F1FF', padding: 15, borderRadius:10}} key={Math.random()}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text>{oef.name}</Text>
                  <Text>{oef.category}</Text>
                  </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                 <Text>Progressie: 0/7</Text>
                  <Text>5d. geleden gestart</Text>
                </View>
                <View style={styles.progressBar}>
                    {
                      (Platform.OS === 'android')
                        ?
                        (<ProgressBarAndroid styleAttr="Horizontal" progress={0} indeterminate={false} />)
                        :
                        (<ProgressViewIOS progress={0} />)
                    }
                </View>
              </TouchableOpacity>
            )) }
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
