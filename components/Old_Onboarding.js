import React from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import Swiper from "react-native-swiper";

export default class TabBarIcon extends React.Component {
  render() {
    return <Swiper style={styles.swiper} showsButtons loop={false} nextButton={<Text style={styles.buttonText}>Volgende</Text>} prevButton={<Text style={styles.buttonText}>Vorige</Text>}>
        <View style={styles.onboarding}>
          <Text>Welkom!</Text>
          {/* Input field */}
          <Text>
            Heather is er voor je wanneer jij het moelijk hebt,
            moodtracking, doelen behalen en talloze oefeningen om jou te
            helpen!
          </Text>
        </View>
        <View style={styles.onboarding}>
          <Text>Vandaag een donderwolk?</Text>
          <Text>
            Word zelfbewust van je emoties, ontdek je werkpunten, … Via
            moodtracking kan je je gevoelens dagelijks kwijt!
          </Text>
        </View>
        <View style={styles.onboarding}>
         <Text>Jouw persoonlijke reis</Text>
         <Text>Stel persoonlijke doelen op om negativiteit om te zetten in positiviteit, kies oefeningen, thema’s en meer!</Text>
         <Button style={styles.buttonFinish}
          onPress={this.HandleStart}
          title="Start je avontuur!"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
         />
       </View>
      </Swiper>;
  }

  HandleStart() {
    console.log("start");
  }
}
        

const styles = StyleSheet.create({
  onboarding: {
    flex: 2,
    marginTop: 20
  },
  swiper: { backgroundColor: "#BDE2F6" },
  buttonFinish: {
    backgroundColor: "#104664",
    padding: 10
  },
  buttonText: {
    fontSize: 20,
    alignItems: "flex-end",
    marginTop: 300,
  }
});
