import { StyleSheet, Text, View, Button, Image,ImageBackground,Dimensions } from 'react-native'
import React,{useState} from 'react'
const windowWidth = Dimensions.get('window').width;

const GameTic = () => {
  const ImageUrl = require('../assets/pencil.png')
  return (
    <View>
        <View style={styles.statusBar}>
          <Text style={styles.status}>
            Player O's Turn
          </Text>
        </View>
        <View style={styles.board}>
          <Image source={ImageUrl} style={styles.image}/>
          <Image source={ImageUrl} style={styles.image}/>
          <Image source={ImageUrl} style={styles.image}/>
          <Image source={ImageUrl} style={styles.image}/>
          <Image source={ImageUrl} style={styles.image}/>
          <Image source={ImageUrl} style={styles.image}/>
          <Image source={ImageUrl} style={styles.image}/>
          <Image source={ImageUrl} style={styles.image}/>
          <Image source={ImageUrl} style={styles.image}/>
        </View>
    </View>
  )
}

export default GameTic

const styles = StyleSheet.create({
  statusBar:{
    flex:1,
    backgroundColor:'#F7CD2E',
    height:50,
    marginTop:20,
    marginHorizontal:10,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
  },
  status:{
    color:"white",
    fontSize:24
  },
  board:{
    backgroundColor:'gray',
    height:300,
    marginVertical:20,
    marginHorizontal:40,
    flexDirection:'row',
    flexWrap:'wrap',
    paddingHorizontal:20,
    paddingVertical:20,
    alignItems:'center',
    justifyContent:"center"
  },
  image:{
    height: 35,
    width:  35,
    marginHorizontal:25,
    marginVertical:25,
  }
})