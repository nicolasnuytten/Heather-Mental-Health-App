import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Button, Slider } from 'react-native';
import { Icon } from "react-native-elements";
import data from "../assets/data/data.json"

export default class CreateMood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "positive" };
  }
  
  static navigationOptions = {
    header: null,
  };

  handleButtonPos = (e) => {
    this.setState({
      tab: "positive"
    });
  };

  handleButtonNeg = (e) => {
    this.setState({
      tab: "negative"
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.state.tab);
    return (
      <View style={styles.container}>
        <View>
          <Icon name="arrow-back" onPress={() => navigate("Home")} />
          <TouchableHighlight onPress={() => navigate("CreateMood2")}>
            <Text>Volgende</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text>Hoe voel je je?</Text>
          {/* https://stackoverflow.com/questions/48089373/display-value-of-slider-with-respect-to-slider-thumb-react-native */}
          <Text>Goed</Text>
          <Text>Slecht</Text>
          <Slider step={1} minimumValue={0} maximumValue={100} value={0} />
          <Button title={"Positief"} onPress={this.handleButtonPos} />
          <Button title={"Negatief"} onPress={this.handleButtonNeg} />
          <View>
            {this.state.tab === "positive"
              ? data.tags.positive.map(tag => (
                  <Text key={tag.name}>{tag.name}</Text>
                ))
              : data.tags.negative.map(tag => (
                  <Text key={tag.name}>{tag.name}</Text>
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
    paddingTop: 20
  }
});
