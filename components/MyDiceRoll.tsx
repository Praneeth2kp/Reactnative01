import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import Dice1 from '../assets/One.png';
import Dice2 from '../assets/Two.png';
import Dice3 from '../assets/Three.png';
import Dice4 from '../assets/Four.png';
import Dice5 from '../assets/Five.png';
import Dice6 from '../assets/Six.png';

const screenHeight = Dimensions.get('window').height;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const MyDiceRoll = () => {
  const [DiceImage, setDiceImage] = useState(Dice1);
  const [DiceImage1, setDiceImage1] = useState(Dice2);
  const [RandomColor, setRandomColor] = useState('#000000');
  const Dice = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const ImageSelection = () => {
    const randomIndex = Math.floor(Math.random() * 6);
    return Dice[randomIndex];
  };
  const RandomBG = () => {
    const RandomColor = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; ++i) {
      color += RandomColor[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const RollDice = () => {
    const newImage = ImageSelection();
    const newImage1 = ImageSelection();
    setDiceImage(newImage);
    setDiceImage1(newImage1);
    setRandomColor(RandomBG());
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };
  return (
    <>
      <View style={[styles.container, {backgroundColor: RandomColor}]}>
        <Text style={styles.Title}>My Dice Roll</Text>
        <View style={styles.imageContainer}>
          <Image source={DiceImage} style={styles.Images} />
          <Image source={DiceImage1} style={styles.Images1} />
        </View>
        <TouchableOpacity onPress={RollDice}>
          <View style={styles.Button}>
            <Text style={styles.BtnTxt}>Roll The Dice</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MyDiceRoll;

const styles = StyleSheet.create({
  Title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 30,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: screenHeight,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  Images: {
    width: 100,
    height: 100,
  },
  Images1: {
    width: 100,
    height: 100,
  },
  Button: {
    height: 60,
    width: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  BtnTxt: {
    fontSize: 24,
    color: '#ffffff',
  },
});
