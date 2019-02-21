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
    const navigate = this.props.navigate;
    const uid = this.props.uid;
    // const title = this.props.title;
    return(
    <View style={styles.wolkContainer}>
          <Text style={[styles.text, styles.donkerBlauw]}>Hoe voel je je vandaag?</Text>
          <Button style={styles.button} title={"Vul in"} onPress={() => navigate("CreateMood", { uid })} />
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
