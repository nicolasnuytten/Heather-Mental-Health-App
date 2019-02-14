import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, AsyncStorage } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import Onboarding from 'react-native-onboarding-swiper';

  componentDidMount = () => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      value = null;
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        this.setState({ firstLaunch: true });
      }
      else {
        this.setState({ firstLaunch: false });
      }
    }) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
  }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLaunch: true,
    }
  }
  render() {
    if (this.state.firstLaunch == true) {
      return <Onboarding
        skipToPage={2}
        bottomBarHeight={40}
        onDone={() => this.setState({firstLaunch: false})}  
        pages={[
        {
          backgroundColor: '#BDE2F6',
          image: <Image source={require('./assets/images/OB_1.png')} />,
          title: 'Welkom!',
          subtitle: 'Heather is er voor je wanneer jij het moelijk hebt, moodtracking, doelen behalen en talloze oefeningen om jou te helpen!',
        },
        {
          backgroundColor: '#BDE2F6',
          image: <Image source={require('./assets/images/OB_2.png')} />,
          title: 'Vandaag een donderwolk?',
          subtitle: 'Word zelfbewust van je emoties, ontdek je werkpunten, … Via moodtracking kan je je gevoelens dagelijks kwijt!',
        },
        {
          backgroundColor: '#BDE2F6',
          image: <Image source={require('./assets/images/OB_3.png')} />,
          title: 'Jouw persoonlijke reis',
          subtitle: 'Stel persoonlijke doelen op om negativiteit om te zetten in positiviteit, kies oefeningen, thema’s & meer!',
          
        },
      ]}
    />
    } else {
      return <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>;
    }    
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
    backgroundColor: "#fff"
  }
});
