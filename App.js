import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  Button,
  Alert,
  Dimensions,
  TouchableOpacity
  // Platform
} from 'react-native';
// to create a custom button we can use touchablenativefeedback to see the efect
const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount(count + 1);
  };
  return (
    <>
      <View>
         <View>
          <View style={[{alignItems: 'center'}, {justifyContent: 'center'}]}>
            <View style={styles.container}>
              <Text style={[{color: 'black'}, {fontSize: 25}]}>
                This is a text inside the view.
              </Text>
            </View>
            <TouchableOpacity onPress={() => onPress()}>
              <View
                style={[
                  {justifyContent: 'center'},
                  {alignItems: 'center'},
                  {flexDirection: 'row'},
                  {gap: 20},
                ]}>
                <Image
                  source={require('./assets/pic1.jpg')}
                  style={[{height: 200}, {width: '50%'}]}
                /> 
                <Image
                  blurRadius={0}
                  fadeDuration={1000}
                  source={{
                    width: 300,
                    height: 300,
                    uri: 'https://picsum.photos/300/300',
                  }}
                  style={[{marginVertical: 10}]}
                />
              </View>
            </TouchableOpacity>
            <Text style={[{fontSize: 20}, {color: 'black'}]}>
              count: {count}
            </Text>
          </View>
          <Button
            title="Click Me"
            onPress={() =>
              Alert.alert('Alert', 'Message', [{text: 'Yes'}, {text: 'No'}])
            }
          />
          <View style={[{marginTop: 20},styles.btn2]}>
            <Button
              title="No No Click Me"
              onPress={() =>
                Alert.alert('Alert', 'Message', [{text: 'Yes'}, {text: 'No'}])

              }
            />
          </View>
        </View>
        <View style={styles.box}>

        </View> 
      </View>
      {/* <View style={styles.box1}>
        <View
          style={[{backgroundColor: 'green'}, {height: 100}, {width: 100}]}
        />
        <View
          style={[{backgroundColor: '#e30022'}, {height: 100}, {width: 100}]}
        />
        <View
          style={[{backgroundColor: 'dodgerblue'}, {height: 100}, {width: 100}]}
        />
        <View
          style={[{backgroundColor: '#FF8C00'}, {height: 100}, {width: 100}]}
        />
        <View
          style={[{backgroundColor: '#E75480'}, {height: 100}, {width: 100}]}
        />
        <View
          style={[{backgroundColor: 'black'}, {height: 100}, {width: 100}]}
        />
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: 'powderblue',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn2: {
    width: '50%',
  },
  box: {
    backgroundColor: 'black',
    height: '70%',
    width: '100%',
    borderWidth: 2,
  },
  box1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
});

export default App;
