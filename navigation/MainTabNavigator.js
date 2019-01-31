import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MoodScreen from '../screens/MoodScreen';
import ReisScreen from '../screens/ReisScreen';
import ProfileScreen from '../screens/ProfileScreen';

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

const ReisStack = createStackNavigator({
  Reis: ReisScreen
});

ReisStack.navigationOptions = {
  tabBarLabel: "Reizen",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-airplane" : "md-airplane"}
    />
  )
}
;
const ProfileStack = createStackNavigator({
  Reis: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
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
  ReisStack
});
