import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Svg } from "expo";
const { Rect, G, Path, Mask, } = Svg;

import Cloud from "../components/Cloud";
import firebase from "firebase";
require("firebase/firestore");
var config = {
  apiKey: "AIzaSyBUM4W5Y6xoNfF1DhT5hayi-thUAmmLmZU",
  authDomain: "heather-app.firebaseapp.com",
  databaseURL: "https://heather-app.firebaseio.com",
  projectId: "heather-app",
  storageBucket: "heather-app.appspot.com",
  messagingSenderId: "868139238502"
};

firebase.initializeApp(config);
let db = firebase.firestore();
let uid;

export default class Homescreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wolkje: false,
      slider1: 50,
      slider2: 50,
      slider3: 50,
      tags1: [],
      tags2: []
    }
  }
  static navigationOptions = {
    header: null,
  };


  componentWillMount = () => {

    firebase.auth().signInAnonymously().catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);

    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        var isAnonymous = user.isAnonymous;
        uid = user.uid;
        console.log("logged in", uid);

        const today = new Date();
        let d = today.getDate();
        let m = today.getMonth() + 1;
        if (d < 10) {
          d = '0' + d;
        }
        if (m < 10) {
          m = '0' + m;
        }
        console.log(uid);
        const ref = db.collection(uid);
        ref.where("uid", "==", uid).where("date", "==", `${d}/${m}`)
          .get()
          .then(querySnapshot => {
            console.log("Data loaded!")
            querySnapshot.forEach(doc => {
              // console.log(doc.id, " => ", doc.data());
              // console.log(doc.data().slider1);
              dataSlider1 = doc.data().slider1;
              dataSlider2 = doc.data().slider2;
              dataSlider3 = doc.data().slider3;
              dataTags1 = doc.data().tags1;
              dataTags2 = doc.data().tags2;
              this.setState({ wolkje: true,
              slider1: dataSlider1, slider2: dataSlider2, slider3: dataSlider3, tags1: dataTags1, tags2: dataTags2});
            });
          })
          .catch(error => {
            console.log("Error getting documents: ", error);
            this.setState({wolkje: false});
          });
      } else {
        // User is signed out.
        console.log("logged out");
      }
    })
  };

  render() {
    const today = new Date();
    const weekday = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
    const dayName = weekday[today.getDay()];
    
    let d = today.getDate();
    let m = today.getMonth() + 1;
    let y = today.getFullYear();
    if (d < 10) {
      d = '0' + d;
    }
    if (m < 10) {
      m = '0' + m;
    }
    const { navigate } = this.props.navigation;
    return <View style={{backgroundColor: `hsl(201, ${this.state.slider3}%, 85%)`, flex: 1 }}>
      {/* <ImageBackground source={require("./../assets/images/background_mountains_faded.png")} style={{ width: '100%', height: '100%' }}> */}
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.title}>Welkom Jolien! </Text>
              <View style={styles.subTitle}>
                <Text style={[styles.day, styles.mediumBlauw]}>{dayName}</Text>
                <Text style={[styles.date, styles.mediumBlauw]}>{d}/{m}/{y}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigate("Profile")}>
              <Image source={require("./../assets/images/profile_icon.png")} />
            </TouchableOpacity>
          </View>
          {console.log(this.state.wolkje)}
          {this.state.wolkje ? <Cloud slider1={this.state.slider1} slider2={this.state.slider2} slider3={this.state.slider3} tags1={this.state.tags1} tags2={this.state.tags2} /> : <View style={styles.wolkContainer}>
            <Text style={[styles.text, styles.donkerBlauw]}>Hoe voel je je vandaag?</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigate("CreateMood", { uid })}>
              <Text style={styles.buttonText}>Vul in</Text>
            </TouchableOpacity>
          </View>}

          <Text style={styles.reizenTitle}>Mijn reizen</Text>
          <View style={styles.reizenContainer}>
            <Text style={[styles.text, styles.donkerBlauw]}>Je hebt nog geen reizen gemaakt, eens proberen?</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigate("ReisToevoegen")}>
              <Text style={styles.buttonText}>Reis maken</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{zIndex: -2}}>
          <Svg width="375" height="372" viewBox="0 0 375 372" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M126.99 0L28.0307 65.4892L0 66.3792L0.381759 86.6755H1.12581L1.82446 197H0V373H377V197H376V189.117L272.818 93L227.81 148.605L175.003 70.5562L176 70.785L139.096 17.4849L127.266 0L127.111 0.176039L126.99 0Z" fill="none"/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M201 239.243L250.01 158L348.969 233.164L377 234.186L376.618 257.48H375.987L375.919 374.96L120 375L120.601 374H1V317.797L103.181 210L103.234 210.074L103.303 210L103.675 210.521L103.615 210L166.437 297.77L201.746 239.046L201 239.243Z" fill="none"/>
          </Svg>

        </View>
      {/* </ImageBackground> */}
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  wolkContainer: {
    // flex: 1,
    height: '40%',
    justifyContent: "center"
  },
  reizenContainer: {
    // flex: 1,
    height: '40%',
    justifyContent: "center"
  },
  donkerBlauw: {
    color: '#104664'
  },
  mediumBlauw: {
    color: '#5D9DBF'
  },
  lichtBlauw: {
    color: '#A7D4EC'
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold'
  },
  subTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },
  day: {
    fontSize: 22
  },
  date: {
    paddingLeft: 5,
    fontSize: 16
  },
  reizenTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    width: 250,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: "#104664",
    borderRadius: 10,
    width: 140,
    height: 40,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18
  }
});
