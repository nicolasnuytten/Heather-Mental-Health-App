import React from 'react';
import { View, StyleSheet, Text, Button, TouchableHighlight } from 'react-native';

export default class EmptyState extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const navigate = this.props.navigate;
    const number = this.props.number;
    return(
    <TouchableHighlight>
      <Text style={styles.circleText}>{number}</Text>
    </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 20
  },
  circleText: {
    textAlign: 'center',
    fontSize: 30,
  }
});
