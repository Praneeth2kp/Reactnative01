import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ListCard = () => {
  const Contacts = [
    {
      uid: 1,
      name: 'Eric',
      phone: '9876543210',
      imageUrl: 'https://picsum.photos/100/300',
    },
    {
      uid: 2,
      name: 'Ross',
      phone: '9876543210',
      imageUrl: 'https://picsum.photos/700/300',
    },
    {
      uid: 3,
      name: 'John',
      phone: '9876543210',
      imageUrl: 'https://picsum.photos/300/300',
    },
    {
      uid: 4,
      name: 'Mary',
      phone: '0176543210',
      imageUrl: 'https://picsum.photos/400/300',
    },
    {
      uid: 5,
      name: 'Rose',
      phone: '0342222210',
      imageUrl: 'https://picsum.photos/500/300',
    },
    {
      uid: 6,
      name: 'Joey',
      phone: '1234567890',
      imageUrl: 'https://picsum.photos/600/300',
    },
  ];
  return (
    <View style={styles.box2}>
      <Text style={styles.title}>Contacts</Text>
      <ScrollView>
        {Contacts.map(({uid, name, phone, imageUrl}) => (
          <View key={uid}>
            <TouchableOpacity style={styles.card}>
              <Image source={{uri: imageUrl}} style={styles.imgs} />
              <View style={styles.cardRight}>
                <View>
                  <Text style={styles.userName}>{name}</Text>
                  <Text style={styles.userNumber}>{phone}</Text>
                </View>
                <Image
                  source={require('../assets/pic3.png')}
                  style={styles.logo}
                />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  box2:{
    marginBottom:30
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 14,
    marginVertical: 10,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop: 2,
    marginLeft:10,
    marginRight:10,
    backgroundColor: '#8D3DAF',
    borderRadius:15,
    padding:3
  },
  imgs: {
    borderRadius: 25,
    height: 50,
    width: 50,
    margin:5,
  },
  userName: {
    fontSize: 20,
    color: 'white',
    fontWeight:"500"
  },
  userNumber: {
    color: 'darkgrey',
  },
  cardRight: {
    width:'80%',
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection: 'row',
    margin:5,
    borderRadius:10,
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
});
export default ListCard;
