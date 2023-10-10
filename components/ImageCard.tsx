import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const ImageCard = () => {
  return (
    <View>
      <View>
        <View>
          <Text style={[{color: 'white'}, {fontSize: 23}]}>ImageCard</Text>
        </View>
        <View style={styles.container2}>
          <ScrollView>
            <View style={[{alignItems: 'center'}]}>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg',
                }}
                style={styles.img1}
              />
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg',
                }}
                style={styles.img1}
              />
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg',
                }}
                style={styles.img1}
              />
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg',
                }}
                style={styles.img1}
              />
            </View>
          </ScrollView>
          <Text style={[styles.imgdes, {fontSize: 20}]}>
            Snow Mountain Valley
          </Text>

          <Text style={styles.imgdes}>Location: Italy</Text>
          <ScrollView scrollEnabled={true}>
            <Text style={styles.imgdes}>
              There are two ways to handle URLs that open your app. 1. If the
              app is already open, the app is foregrounded and a Linking 'url'
              event is fired You can handle these events with
              Linking.addEventListener - it calls callback with the linked URL
              2. If the app is not already open, it is opened and the url is
              passed in as the initialURL You can handle these events with
              Linking.getInitialURL - it returns a Promise that resolves to the
              URL, if there is one.
            </Text>
            <Text style={[styles.imgdes, {marginTop: 30}]}>From Pexels</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    height: 500,
    width: '98%',
    backgroundColor: 'grey',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'grey',
  },
  img1: {
    borderRadius: 10,
    height: 300,
    width: '100%',
  },
  imgdes: {
    color: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 15,
  },
});
export default ImageCard;
