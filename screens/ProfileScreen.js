import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator, createAppNavigator } from "react-navigation";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: "Profile",
  };

  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={styles.arrow} name="arrow-back" onPress={() => navigate("Home")} />
        <Text style={styles.title}>Profiel</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.subTitle}>Statestieken</Text>
        <View style={styles.stats}>
          <View style={styles.center}>
            <Text style={styles.statsNumber}>20</Text>
            <Text style={styles.statsText}>Wolkjes</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.statsNumber}>12</Text>
            <Text style={styles.statsText}>Oefeningen</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.statsNumber}>5</Text>
            <Text style={styles.statsText}>Reizen</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{ paddingBottom: 40 }}>
          <Text style={styles.subTitle}>Heather App</Text>
          <Text style={styles.text}>Heather helpt je zelfbewuster te worden van je emoties door deze dagelijks bij te houden. Doe aan zelf-coaching door reizen op te stellen om deze emoties de baas te worden via talloze motiverende of rustgevende oefeningen.</Text>
        </View>
        <View>
          <Text style={[styles.subTitle, styles.orange]}>Hulpcentrum</Text>
          <Text style={[styles.text, styles.orange]}>Heb je verdere hulp nodig? Geen zorgen, we got you! Hier zijn enkele geweldige organisaties.</Text>
        </View>
        <View>
          <Text style={styles.orgName}>Awel</Text>
          <Text style={[styles.text, styles.lichtBlauw]}>Awel ik wil wel een babbel!</Text>
          <View style={styles.orgContact}>
            <Image source={require("./../assets/images/phone_icon.png")} />
            <Text style={styles.text}>tel</Text>
          </View>
          <View style={styles.orgContact}>
            <Image source={require("./../assets/images/chat_icon.png")} />
            <Text style={styles.text}>chat</Text>
          </View>
          <View style={styles.orgContact}>
            <Image source={require("./../assets/images/site_icon.png")} />
            <Text style={styles.text}>site</Text>
          </View>
        </View>
        <Text style={styles.text}>Privacybeleid &amp; gebruikerovereenkomsten</Text>
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
    padding: 20
  },
  header: {
    flexDirection: 'row',
    paddingTop: 10,
    alignSelf: 'center'
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold'
  },
  arrow: {
  },
  statsContainer: {
    paddingTop: 10,
    paddingBottom: 40
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  subTitle: {
    color: '#104664',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  orange: {
    color: '#F2994A'
  },
  lichtBlauw: {
    color: '#A7D4EC'
  },
  text: {
    fontSize: 16,
    color: '#104664'
  },
  statsNumber: {
    color: '#104664',
    fontSize: 34,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  statsText: {
    color: 'white',
    fontSize: 16
  },
  orgName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#104664'
  },
  orgContact: {
    flexDirection: 'row',
    alignContent: 'center'
  },
  orgChat: {

  },
  orgSite: {

  },
});
