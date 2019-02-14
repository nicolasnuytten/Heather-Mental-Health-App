import React from 'react';
import { View, StyleSheet, Text, Slider, Button, TouchableOpacity, Image } from 'react-native';
import { Icon } from "react-native-elements";
import data from "../assets/data/data.json";

import firebase from "firebase";
require("firebase/firestore");
let db = firebase.firestore();

let tagsList = [];

export default class CreateMood2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider2: 50,
      slider3: 50,
      tags: [] 
    }
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
    tagsList.push(tag);
    this.setState({
      tags: tagsList
    });
  };

  handleData = () => {
    const { navigate} = this.props.navigation;
    const uid = this.props.navigation.state.params.uid;
    const id = this.props.navigation.state.params.id;
    db.collection(uid).doc(id).update({
      slider2: this.state.slider2,
      slider3: this.state.slider3,
      tags2: tagsList
    });
    
    tagsList = [];
    console.log("Adding 2 DB");

    navigate("Home", {update: true});
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.navHeader}>
          <TouchableOpacity style={styles.arrow} onPress={() => navigate("CreateMood")}>
            <Image source={require("./../assets/images/back_arrow.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleData}>
            <Text style={styles.buttonText}>Gereed</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 20, marginRight: 20}}>
          <Text style={styles.title}>Hoe was je dag?</Text>
          <View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Rustig</Text>
            <Text>Druk</Text>
          </View>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={this.state.slider2}
              onValueChange={val =>
                this.setState({
                  slider2: val
                })
              }
            />
          </View>
          <View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Positief</Text>
            <Text>Negatief</Text>
          </View>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={this.state.slider3}
              onValueChange={val =>
                this.setState({
                  slider3: val
                })
              }
            />
          </View>
          <Text style={styles.title}>Wat heb je gedaan?</Text>
          <View style={styles.tagList}>
            {data.tags_2.map(tag => (
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
