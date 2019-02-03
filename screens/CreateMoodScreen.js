import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Button, Slider } from 'react-native';
import { Icon } from "react-native-elements";
import data from "../assets/data/data.json"
const tagsList = [];

export default class CreateMood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "positive",
    mood: {
      slider1: 50,
    },
    tags: [] };
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
    // console.log(tag);
    tagsList.push(tag);
    console.log(tagsList);
    this.setState({
      tags: tagsList
    })
  };

  handleNextButton = () => {
    const {navigate} = this.props.navigation;
    console.log(this.state.mood.slider1);
    console.log(this.state.tab);
    navigate("CreateMood2", {slider1: this.state.mood.slider1});
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <View>
          <Icon name="arrow-back" onPress={() => navigate("Home")} />
          <Button title="Volgende" onPress={this.handleNextButton} />
        </View>
        <View>
          <Text>Hoe voel je je?</Text>
          {/* https://stackoverflow.com/questions/48089373/display-value-of-slider-with-respect-to-slider-thumb-react-native */}
          <Text>Goed</Text>
          <Text>Slecht</Text>
          <Slider
            step={1}
            minimumValue={0}
            maximumValue={100}
            value={this.state.mood.slider1}
            onValueChange={val =>
              this.setState({
                mood: {
                  slider1: val
                }
              })
            }
          />
          <Button title={"Positief"} onPress={this.handleButtonPos} />
          <Button title={"Negatief"} onPress={this.handleButtonNeg} />
          <View>
            {this.state.tab === "positive"
              ? data.tags_1.positive.map(tag => (
                <TouchableHighlight key={tag.name} onPress={ () => this.handleTag(tag.name)}>
                    <Text >{tag.name}</Text>
                  </TouchableHighlight>
                ))
              : data.tags_1.negative.map(tag => (
                  <TouchableHighlight
                    key={tag.name}
                  onPress={() => this.handleTag(tag.name)}
                  >
                    <Text>{tag.name}</Text>
                  </TouchableHighlight>
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
