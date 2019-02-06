import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class EmptyState extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    const uid = this.props.uid;
    const title = this.props.title;
    return(
    <View style={styles.wolkContainer}>
      <Text style={[styles.text, styles.donkerBlauw]}>{this.props.q}</Text>
      <Button style={styles.button} title={`${title}`} onPress={() => navigate(`${this.props.nav}`, { uid })} />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 20
  }
});
