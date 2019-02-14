import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MoodScreen from '../screens/MoodScreen';
import CreateMoodScreen from '../screens/CreateMoodScreen';
import CreateMoodScreen2 from '../screens/CreateMoodScreen2';
import ReizenScreen from '../screens/ReizenScreen';
import ReisDetailScreen from '../screens/ReisDetailScreen';
import OefeningScreen from '../screens/OefeningScreen';
import VoltooidScreen from '../screens/VoltooidScreen';
import OefeningDetailScreen from '../screens/OefeningDetailScreen';
// import ReisToevoegenScreen from '../screens/ReisToevoegenScreen';
// import ReisToevoegenScreen2 from '../screens/ReisToevoegenScreen2';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon
      focused={focused}
      name={"cloud"}
      color={tintColor}
      size={20}
    />
  )
};

const MoodStack = createStackNavigator({
  Mood: MoodScreen
});

MoodStack.navigationOptions = {
  tabBarLabel: "Overzicht",
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon
      focused={focused}
      name={"calendar"}
      color={tintColor}
      size={20}
    />
  )
};

const ReizenStack = createStackNavigator({
  Reizen: ReizenScreen,
  Oefening: OefeningScreen,
  Voltooid: VoltooidScreen,
});

ReizenStack.navigationOptions = {
  tabBarLabel: "Reizen",
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon
      focused={focused}
      name={"map"}
      color={tintColor}
      size={20}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  MoodStack,
  ReizenStack
});
