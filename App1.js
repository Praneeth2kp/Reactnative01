import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import ImageCard from './components/ImageCard';
import ScrollCard from './components/ScrollCard';
import LinkingCard from './components/LinkingCard';
import ListCard from './components/ListCard';
import TextApi from './components/TextApi';
import GameTic from './components/GameTic';
import ApiCall from './components/ApiCall';
import MyDiceRoll from './components/MyDiceRoll';
const App1 = () => {
  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        {/* <ScrollCard /> */}
        {/* <ImageCard /> */}
        {/* <LinkingCard /> */}
        {/* <ListCard />   */}
        {/* <ApiCall /> */}
        {/* <TextApi /> */}
        {/* <GameTic /> */}
        <MyDiceRoll />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App1;
