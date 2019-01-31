import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MoodScreen from '../screens/MoodScreen';
import ReizenScreen from '../screens/ReizenScreen';

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
  Reizen: ReizenScreen
});

ReizenStack.navigationOptions = {
  tabBarLabel: "Reizen",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-airplane" : "md-airplane"}
    />
  )
};

export default createBottomTabNavigator({
  MoodStack,
  HomeStack,
  ReizenStack
});
