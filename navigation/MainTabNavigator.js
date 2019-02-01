import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MoodScreen from '../screens/MoodScreen';
import ReizenScreen from '../screens/ReizenScreen';
import OefeningScreen from '../screens/OefeningScreen';
import VoltooidScreen from '../screens/VoltooidScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};

const MoodStack = createStackNavigator({
  Mood: MoodScreen
});

MoodStack.navigationOptions = {
  tabBarLabel: "Mood",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-thunderstorm" : "md-cloud"}
    />
  )
};

const ReizenStack = createStackNavigator({
  Reizen: ReizenScreen,
  Oefening: OefeningScreen,
  Voltooid: VoltooidScreen
});

ReizenStack.navigationOptions = {
  tabBarVisible: true,
  tabBarLabel: "Reizen",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-airplane" : "md-airplane"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  MoodStack,
  ReizenStack
});
