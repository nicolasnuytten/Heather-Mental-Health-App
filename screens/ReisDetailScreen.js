import React from 'react';
import { View, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
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
        <TouchableOpacity style={styles.themaButton}>
          <Text>Thema</Text>
        </TouchableOpacity>
        <ScrollView style={{flex: 2}} contentOffset={{x: 0, y: 500}}>
          <ImageBackground source={require("./../assets/images/background_city.png")} style={styles.backgroundImage} >
            <View>
              <TouchableOpacity style={[styles.circle, styles.circleDone]} onPress={() => navigate("OefeningDetail", {screen: "ReisDetail"})}>
                <Text style={[styles.circleText, styles.circleDoneText]}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circle, styles.circle2, styles.circleDone]}>
                <Text style={[styles.circleText, styles.circleDoneText]}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circle, styles.circle3, styles.circleDone]}>
                <Text style={[styles.circleText, styles.circleDoneText]}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circle, styles.circle4, styles.circleCurrent]}>
                <Text style={[styles.circleText, styles.circleTextCurrent]}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circle, styles.circle5]}>
                <Text style={styles.circleText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circle, styles.circle6]}>
                <Text style={styles.circleText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.circle, styles.circle7]}>
                <Text style={styles.circleText}>7</Text>
              </TouchableOpacity>
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
      resizeMode: 'cover',
      height: 1100,
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
    marginTop: 890, 
    marginLeft: 60,
    width: 50,
    height: 50,
    backgroundColor: '#86BCDA',
    padding: 10,
    position: 'absolute',
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  circle2: {
    marginTop: 820, 
    marginLeft: 260,
  },
  circle3: {
    marginTop: 620, 
    marginLeft: 60,
  },
  circle4: {
    marginTop: 550, 
    marginLeft: 260,
  },
  circle5: {
    marginTop: 320,
    marginLeft: 60,
  },
  circle6: {
    marginTop: 230,
    marginLeft: 260,
  },
  circle7: {
    marginTop: 100,
    marginLeft: 160,
  },
  circleText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  },
  circleDone: {
    backgroundColor: '#104664',
  },
  circleDoneText: {
    color: '#86BCDA'
  },
  circleCurrent: {
    backgroundColor: '#FFE065'
  },
  circleTextCurrent: {
    color: '#F2994A'
  },
  themaButton: {
    position: 'absolute',
    zIndex: 3,
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    marginLeft: 300,
    marginTop: 900
  }
});