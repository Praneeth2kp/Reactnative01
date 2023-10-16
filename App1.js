import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import ImageCard from './components/ImageCard';
import ScrollCard from './components/ScrollCard';
import LinkingCard from './components/LinkingCard';
import ListCard from './components/ListCard';
import TextApi from './components/TextApi';
import GameTic from './components/GameTicTacToe/GameTic';
import ApiCall from './components/ApiCall';
import MyDiceRoll from './components/MyDiceRoll';
import CurrencyCalculator from './components/CurrencyCalc/CurrencyCalculator';
const App1 = () => {
  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={false}>
        <ScrollCard />
        <ImageCard />
        <LinkingCard />
        <ListCard />  
        <ApiCall />
        <TextApi />
        <GameTic />
        <MyDiceRoll />
        <CurrencyCalculator />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App1;
