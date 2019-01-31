import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';
import { Calendar } from "react-native-calendars";

export default class Moodscreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <View style={styles.container}>
        <View style={styles.mood}>
          <Text>Wolkje</Text>
        </View>
        <Calendar style={styles.calendar}
        // Collection of dates that have to be marked. Default = {}
        maxDate={'2019-01-31'}
        onDayPress={(day) => { console.log('selected day', day) }}
        markedDates={{
          '2019-01-08': { marked: true, dotColor: 'orange', selected: true},
          '2019-01-09': { marked: true, dotColor: 'orange'},
          '2019-01-10': { marked: true, dotColor: 'orange'},
          '2019-01-11': { marked: true, dotColor: 'green'},
          '2019-01-16': { marked: true, dotColor: 'red'},
          '2019-01-17': { marked: true, dotColor: 'green'},
          '2019-01-18': { marked: true, dotColor: 'red'},
          '2019-01-19': { marked: true, dotColor: 'green'},
        }}
       />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 20
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
