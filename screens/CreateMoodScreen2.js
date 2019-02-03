import React from 'react';
import { View, StyleSheet, Text, Slider, Button, TouchableHighlight } from 'react-native';
import { Icon } from "react-native-elements";
import data from "../assets/data/data.json";

export default class CreateMood2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "positive"}
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

  handleTag = (e) => {
    console.log(e);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Icon name="arrow-back" onPress={() => navigate("CreateMood")} />
          <Button title="Klaar" onPress={() => navigate("Home")} />
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
              value={50}
            />
          </View>
          <View>
            <Text>Positief</Text>
            <Text>Negatief</Text>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={50}
            />
          </View>
          <Text>Wat heb je gedaan?</Text>
          <View>
            {
              data.tags_2.map(tag => (
                <TouchableHighlight onPress={this.handleTag}>
                  <Text key={tag.name}>{tag.name}</Text>
                </TouchableHighlight>
                ))
              }
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
