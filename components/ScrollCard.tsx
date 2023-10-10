import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const ScrollCard = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.title1}>Flat Cards</Text>
          <ScrollView horizontal style={styles.container1}>
            <View style={[styles.box1, styles.card1]}>
              <Text style={{color: 'black'}}>Card1</Text>
            </View>
            <View style={[styles.box1, styles.card2]}>
              <Text style={{color: 'black'}}>Card2</Text>
            </View>
            <View style={[styles.box1, styles.card3]}>
              <Text style={{color: 'black'}}>Card3</Text>
            </View>
            <View style={[styles.box1, styles.card4]}>
              <Text style={{color: 'black'}}>Card4</Text>
            </View>
            <View style={[styles.box1, styles.card5]}>
              <Text style={{color: 'black'}}>Card5</Text>
            </View>
            
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title1: {
    color: 'white',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 23,
  },
  container1: {
    flexDirection: 'row',
  },
  //box dimensions and styles
  box1: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 6,
    elevation: 4,
    // shadowOffset:{
    //     width : 1 ,
    //     height : 1
    // },
    // shadowColor:'#333',
    // shadowOpacity:0.4,
    // shadowRadius:2,
  },
  // card colors
  card1: {
    backgroundColor: 'dodgerblue',
  },
  card2: {
    backgroundColor: 'green',
  },
  card3: {
    backgroundColor: 'yellow',
  },
  card4: {
    backgroundColor: 'red',
  },
  card5: {
    backgroundColor: 'darkgrey',
  },
});

export default ScrollCard;
