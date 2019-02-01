import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Slider, Button } from 'react-native';
import { Icon } from "react-native-elements";
import data from "../assets/data/data.json";

export default class CreateMood2 extends React.Component {
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
    return (
      <View style={styles.container}>
        <View>
          <Icon name="arrow-back" onPress={() => navigate("CreateMood")} />
          <TouchableHighlight onPress={() => navigate("Home")}>
            <Text>Klaar</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text>Hoe was je dag?</Text>
          <View>
            <Text>Rustig</Text>
            <Text>Druk</Text>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={0}
            />
          </View>
          <View>
            <Text>Positief</Text>
            <Text>Negatief</Text>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={0}
            />
          </View>
          <Text>Wat heb je gedaan?</Text>
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

const handleProfile = () => {
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 20
  }
});
