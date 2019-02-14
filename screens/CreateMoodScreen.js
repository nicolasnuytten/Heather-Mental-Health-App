import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, Slider, Image } from 'react-native';
import { Icon } from "react-native-elements";
import data from "../assets/data/data.json"
let tagsList = [];
import Cloud from "../components/Cloud";

import firebase from "firebase";
require("firebase/firestore");
let db = firebase.firestore();

export default class CreateMood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "positive",
      slider1: 50,
      slider2: 50,
      slider3: 50,
      tags: []
    };
  }

  static navigationOptions = {
    header: null,
  };

  handleButtonPos = () => {
    this.setState({
      tab: "positive"
    });
  };

  handleButtonNeg = () => {
    this.setState({
      tab: "negative"
    });
  };

  handleTag = (tag) => {
    console.log(tag);
    tagsList.push(tag);
    this.setState({
      tags: tagsList
    })
  };

  handleData = () => {
    const { navigate } = this.props.navigation;
    const uid = this.props.navigation.state.params.uid;
    console.log(uid);

    const today = new Date();
    let d = today.getDate();
    let m = today.getMonth() + 1;
    if (d < 10) {
      d = '0' + d;
    }
    if (m < 10) {
      m = '0' + m;
    }

    console.log(this.state.slider1);
    console.log("Adding 2 DB");
    console.log(uid);
    db.collection(uid)
      .add({
        uid: `${uid}`,
        date: `${d}/${m}`,
        slider1: this.state.slider1,
        slider2: this.state.slider2,
        slider3: this.state.slider3,
        tags1: tagsList
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        navigate("CreateMood2", { uid: uid, id: docRef.id });
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    tagsList = [];
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.navHeader}>
          <TouchableOpacity style={styles.arrow} onPress={() => navigate("Home")}>
            <Image source={require("./../assets/images/back_arrow.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleData}>
            <Text style={styles.buttonText}>Volgende</Text>
          </TouchableOpacity>
        </View>
        {/* <Cloud style={styles.wolkContainer} slider1={this.state.slider1} slider2={this.state.slider2} slider3={this.state.slider3} tags1={this.state.tags1} tags2={this.state.tags2} />    */}
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text style={styles.title}>Hoe voel je je?</Text>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Slecht</Text>
            <Text>Goed</Text>
          </View>
          <Slider
            step={1}
            minimumValue={40}
            maximumValue={100}
            value={this.state.slider1}
            onValueChange={val =>
              this.setState({
                slider1: val
              })
            }
          />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 }}>
            <TouchableOpacity style={styles.button} onPress={this.handleButtonPos}>
              <Text style={styles.buttonText}>Positief</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.handleButtonNeg}>
              <Text style={styles.buttonText}>Negatief</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tagList}>
            {this.state.tab === "positive"
              ? data.tags_1.positive.map(tag => (
                <TouchableOpacity style={styles.tag} key={tag.name} onPress={() => this.handleTag(tag.name)}>
                  <Text style={styles.tagText} >{tag.name}</Text>
                </TouchableOpacity>
              ))
              : data.tags_1.negative.map(tag => (
                <TouchableOpacity style={styles.tag}
                  key={tag.name}
                  onPress={() => this.handleTag(tag.name)}
                >
                  <Text style={styles.tagText}>{tag.name}</Text>
                </TouchableOpacity>
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
    paddingTop: 30
  },
  selected: {
    fontWeight: "bold"
  },
  navHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 22,
    color: "#104664",
    fontWeight: "bold",
    alignSelf: "center"
  },
  subTitle: {
    fontSize: 20,
    color: "#104664",
    alignSelf: "center"
  },
  textInput: {
    backgroundColor: "#86BCDA",
    margin: 20,
    borderRadius: 20,
    padding: 10,
    color: "#BDE2F6",
    fontSize: 16
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 160,
    height: '100%'
  },
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF3C1",
    height: 132,
    justifyContent: "space-between",
    borderRadius: 10,
    position: "relative"
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
  },
  selectedIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#86BCDA",
    borderRadius: 20,
    position: "absolute",
    zIndex: 100,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: -8,
    marginRight: -15
  },
  selectedText: {
    alignSelf: "center",
    fontSize: 20
  },
  hidden: {
    display: "none"
  },
  buttonText: {
    fontSize: 18,
    color: "#104664"
  },
  tag: {
    padding: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#104664',
    borderRadius: 10
  },
  tagText: {
    fontSize: 16,
    color: '#fff'
  },
  tagList: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 20
  }
});
