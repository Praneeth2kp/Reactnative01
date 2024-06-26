import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const LinkingCard = () => {
  function openWebsite(websitelink: string) {
    Linking.openURL(websitelink);
  }
  return (
    <View>
      <Text style={[styles.title,{alignItems:'center'}]}>Deep Linking Cards</Text>
      <View style={{alignItems: 'center'}}>
        <View style={styles.outcard}>
          <Text style={styles.btitle}>Blog Title</Text>
          <Image source={require('../assets/pic3.jpg')} style={styles.images} />
          <View style={styles.innerCard}>
            <Text style={styles.dtitle}>Image Description Title</Text>
            <Text numberOfLines={3} style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quas natus recusandae repellat deleniti voluptatum quisquam Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quos quas
              molestias voluptatum quisquam nemo doloremque? Suscipit delectus
              placeat
            </Text>
            <View style={styles.footer}>
              <TouchableOpacity
                onPress={() =>
                  openWebsite(
                    'https://reactnative.dev/docs/linking',
                  )
                }>
                <Text style={styles.leftfooter}>Read More</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  openWebsite(
                    'https://reactnative.dev',
                  )
                }>
                <Text style={styles.rightfooter}>Subscribe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LinkingCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop:10
  },
  outcard: {
    height: 470,
    width: '98%',
    backgroundColor:'white',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth:5,
    borderColor:'white'
  },
  btitle: {
    color: 'black',
    fontSize: 21,
    fontWeight: '600',
  },
  images: {
    height: 300,
    width: '100%',
  },
  innerCard: {},
  dtitle: {
    color: '#48BBEC',
    fontSize: 19,
  },
  description: {
    color: 'grey',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    alignItems: 'center',
  },
  leftfooter: {
    color: 'blue',
    fontSize: 19,
    height: 30,
    width: 140,
    backgroundColor: 'black',
    paddingLeft: '6%',
  },
  rightfooter: {
    color: 'red',
    fontSize: 19,
    height: 30,
    width: 140,
    backgroundColor: 'black',
    paddingLeft: '8%',
  },
});
