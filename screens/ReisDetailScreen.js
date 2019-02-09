import React from 'react';
import { View, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";
import Circle from "../components/Circle.js";

export default class ReisDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon style={styles.arrow} name="arrow-back" onPress={() => navigate("Reizen")} />    
          <Text style={styles.text}>Ontstressen</Text>
        </View>
        <ScrollView style={{flex: 2}} contentOffset={{x: 0, y: 560}}>
          <ImageBackground source={require("./../assets/images/background_city.png")} style={styles.backgroundImage} >
            <View>
              {/* <TouchableHighlight style={styles.circle}>
                <Text>1</Text>
              </TouchableHighlight> */}
              <Circle style={styles.circle, {marginTop: 970, marginLeft: 50}} number={"1"}/>
              <Circle style={styles.circle, {marginTop: 900, marginLeft: 50}} number={"2"}/>
              <Circle style={styles.circle, {marginTop: 850, marginLeft: 50}} number={"3"}/>

            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#BDE2F6'
   },
  backgroundImage: {
      flex: 1,
      resizeMode: 'stretch',
      height: 1200
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
  },
  circle: {
    marginTop: 970,
    marginLeft: 50,
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    padding: 10,
    position: 'absolute',
    borderRadius: 100
  },
  circleText: {
    textAlign: 'center',
    fontSize: 30,
  }
});