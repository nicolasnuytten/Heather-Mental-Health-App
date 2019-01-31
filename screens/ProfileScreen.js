import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppNavigator } from "react-navigation";

export default class Profilescreen extends React.Component {
  static navigationOptions = {
    header: "Profile",
  };

  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.container}>
        <View>
          <Icon name="arrow-back" onPress={() => navigate("Home")} />
          <Text>Profiel</Text>
        </View>
        <View>
          <Text>Statestieken</Text>
          <View>
            <Text>20</Text>
            <Text>Wolkjes</Text>
          </View>
          <View>
            <Text>12</Text>
            <Text>Oefeningen</Text>
          </View>
          <View>
            <Text>5</Text>
            <Text>Reizen</Text>
          </View>
        </View>
        <View>
          <Text>Informatie</Text>
          <View>
            <Text>Heather App</Text>
            <Text>...</Text>
          </View>
          <View>
            <Text>Hulpcentrum</Text>
            <Text>...</Text>
          </View>
          <Text>Privacybeleid &amp; gebruikerovereenkomsten</Text>
        </View>
        
      </View>;
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
