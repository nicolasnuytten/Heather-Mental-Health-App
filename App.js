import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import Onboarding from './components/Onboarding';
import checkIfFirstLaunch from "./utils/OnboardingCheck";


const HAS_LAUNCHED = "hasLaunched";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    firstLaunch: null,
  };
  
  async componentWillMount() {
    const isFirstLaunch = await checkIfFirstLaunch();
    this.setState({ isFirstLaunch, hasCheckedAsyncStorage: false });
  }

  render() {
      return <Onboarding />;
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
