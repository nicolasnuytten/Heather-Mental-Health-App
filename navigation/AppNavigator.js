import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import CreateMoodScreen from "../screens/CreateMoodScreen";
import CreateMoodScreen2 from "../screens/CreateMoodScreen2";
import VoltooidScreen from "../screens/VoltooidScreen";
import OefeningScreen from "../screens/OefeningScreen";
import ReizenScreen from "../screens/ReizenScreen";
import OefeningDetailScreen from "../screens/OefeningDetailScreen";
import ReisToevoegenScreen from "../screens/ReisToevoegenScreen";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Profile: ProfileScreen,
    CreateMood: CreateMoodScreen,
    CreateMood2: CreateMoodScreen2,
    Voltooid: VoltooidScreen,
    Oefening: OefeningScreen,
    Reizen: ReizenScreen,
    OefeningDetail: OefeningDetailScreen,
    ReisToevoegen: ReisToevoegenScreen
  })
);