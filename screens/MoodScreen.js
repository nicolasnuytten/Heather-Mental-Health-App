import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';
import { Calendar } from "react-native-calendars";
import Cloud from "../components/Cloud";

let uid;
import firebase from "firebase";
require("firebase/firestore");
let db = firebase.firestore();
export default class Moodscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    const today = new Date();
    let y = today.getFullYear();
    let m = today.getMonth() + 1;
    let d = today.getDate();
    if (d < 10) {
      d = '0' + d;
    }
    if (m < 10) {
      m = '0' + m;
    }
    // console.log(`${y}-${m}-${d}`);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        var isAnonymous = user.isAnonymous;
        uid = user.uid;
        console.log("logged in", uid);
      }
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
            this.setState({
              slider1: dataSlider1, slider2: dataSlider2, slider3: dataSlider3, tags1: dataTags1, tags2: dataTags2
            });
          });
        })
    });

  }

  render() {
    const today = new Date();
    let y = today.getFullYear();
    let m = today.getMonth() + 1;
    let d = today.getDate();
    if (d < 10) {
      d = '0' + d;
    }
    if (m < 10) {
      m = '0' + m;
    }
    // console.log(`${y}-${m}-${d}`);
    return <View style={styles.container}>
      <View style={styles.mood}>
        <Cloud style={styles.wolkContainer} slider1={this.state.slider1} slider2={this.state.slider2} slider3={this.state.slider3} tags1={this.state.tags1} tags2={this.state.tags2} />
      </View>
      <Calendar style={styles.calendar}
        maxDate={`${y}-${m}-${d}`}
        onDayPress={(day) => console.log(day)}
        // markedDates={{ ...this.state.markedDates, [this.state.selected_date]: { selected: true, disableTouchEvent: true, } }}
        markedDates={{
          '2019-01-08': { marked: true, dotColor: 'orange' },
          '2019-01-09': { marked: true, dotColor: 'orange' },
          '2019-01-10': { marked: true, dotColor: 'orange' },
          '2019-01-11': { marked: true, dotColor: 'green' },
          '2019-01-16': { marked: true, dotColor: 'red' },
          '2019-01-17': { marked: true, dotColor: 'green' },
          '2019-01-18': { marked: true, dotColor: 'red' },
          '2019-01-19': { marked: true, dotColor: 'green' },
        }}
        theme={{
          textSectionTitleColor: '#104664',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#DAF3FE',
          todayTextColor: '#104664',
          dayTextColor: '#609CBC',
          arrowColor: '#104664',
          monthTextColor: '#104664',
          textMonthFontWeight: 'bold',
          textDayFontSize: 18,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 16
        }}
      />
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 10
  },
  mood: {
    flex: 1
  },
  calendar: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  }
});
