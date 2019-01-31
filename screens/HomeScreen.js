import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';
import { createStackNavigator, createAppNavigator } from 'react-navigation';
import { Svg } from "expo";
import ProfileScreen from "./ProfileScreen";
const { Circle, Rect, G, Path, Mask,  } = Svg;

const MainNavigator = createStackNavigator({
  Profile: { screen: ProfileScreen },
});

export default class Homescreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.container}>
        <View>
          <Text>Welkom Jolien! </Text>
          <Text>Maandag, 21/01/2019</Text>
        <TouchableHighlight onPress={() => navigate('Profile')}>
            <Image style={styles.button} source={require("./../assets/images/profile_icon.png")} />
          </TouchableHighlight>
        </View>
        <View>
          <Text>Hoe voel je je vandaag?</Text>
          {/* <Button title="Vul in" /> */}
        </View>
        <View>
          <Text>Mijn reizen</Text>
          <Text>Je hebt nog geen reizen gemaakt, eens proberen?</Text>
          {/* <Button title="Reis maken" /> */}
        </View>
      <Svg width="375" height="483" viewBox="0 0 375 483" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G opacity="0.43843" fill="#A9D5ED" >
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M155 238.559L376 239V189.117L272.818 93L155 238.559Z"  />
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M273.697 94L299.216 117.768L297.021 133.793L305 151H279.835L268.786 131.642L233 144.029L273.697 94Z"  />
          <G mask="url(#mask0)">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M272.631 93.3452L267.706 131.339L278.786 150.878L309.3 187.294L309.539 246L298.564 238.474L155.072 238.806L272.631 93.3452Z"  />
          </G>
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M127.266 0L68.6994 66.8088H1L2.09275 239.366L291 242L127.266 0Z"  />
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M126.99 0L28.0307 65.4892L0 66.3792L0.381759 86.6755H75.8363L92.53 73.4336L123.642 88L147.165 64.1647L176 70.785L126.99 0Z"  />
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M126.737 0.183105L117.337 49.5955L92.3462 74.3309L75.6852 87.7016L84.9062 119.437L67.3547 150.542L0.513695 191.744L0.0811948 191.411L-0.000305176 67.2079L27.9752 66.3088L126.737 0.183105Z"  />
          <Rect y="197" width="377" height="176" fill="#A9D5ED" />
        </G>
        <G opacity="0.719703" fill="#9ACCE8">
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M1 327.797V384H221L103.181 220L1 327.797Z" />
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M103.303 220L77.7836 247.104L79.9795 265.378L72 285H97.1651L108.214 262.925L144 277.051L103.303 220Z"  />
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M103.615 220L108.532 262.836L97.469 284.865L67 325.923V383.6L221 384L103.615 220Z"/>
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M249.876 169L120 385L375.919 384.96L376 244.693H308.377L249.876 169Z"  />
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M250.01 168L201 249.243L229.835 241.644L253.359 269L284.47 252.283L301.164 267.48H376.618L377 244.186L348.969 243.164L250.01 168Z"  />
          <Mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="249" y="168" width="128" height="216">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M249.343 168.333H376.577V383.96H249.343V168.333Z" fill="white" />
          </Mask>
          <G mask="url(#mask1)">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M249.343 168.333L258.78 224.05L283.869 251.942L300.595 267.018L279.307 307.724L308.958 337.877V383.106L376.495 383.96L376.577 243.91L348.492 242.896L249.343 168.333Z"  />
          </G>
        <Rect y="361" width="375" height="231" fill="#A2D1EB" />
        </G>
      </Svg>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BDE2F6",
    paddingTop: 20
  }
});
