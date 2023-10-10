import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import axios from 'axios';
interface User {
  id: number;
  name: string;
  email: string;
  address: [
    {
      street: string;
    },
  ];
}
const windowWidth = Dimensions.get('window').width;
const TextApi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<User[]>([]);
  const [filteredResult, setFilteredResult] = useState<User[]>([]);

  const Search = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setSearchResult(response.data);
    } catch (error) {
      console.log('Error', error);
    }
  };
  useEffect(() => {
    Search();
  }, []);
  const filterData = () => {
    const filteredData = searchResult.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredResult(filteredData);
  };
  useEffect(() => {
    filterData();
  }, [searchTerm, searchResult]);
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.titleheader}>
          <Text style={styles.title}>Search Application</Text>
        </View>
        <View>
          {/* <Image
            source={require('../assets/search.png')}
            resizeMode="contain"
            style={styles.searchlogo}
          /> */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={text => setSearchTerm(text)}
          />
        </View>
        <View style={styles.button}>
          <Button title="Search in the API" onPress={Search} color={'green'} />
        </View>
      </View>
      <FlatList
        nestedScrollEnabled={false}
        keyExtractor={item => item.id.toString()}
        data={filteredResult}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>ID: {item.id}</Text>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text>
          This is a simple example of how to use React Native Flatlist with 3rd
          party libraries like axios.
        </Text>
        <Text>By, Praneeth.K</Text>
      </View>
    </View>
  );
};
export default TextApi;
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  },
  titleheader: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchlogo: {
    width: '40%',
    height: '40%',
    marginLeft: '70%',
    marginTop: '6%',
    position: 'absolute',
  },
  input: {
    margin: 10,
    paddingLeft: 30,
    borderColor: 'gray',
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 25,
  },
  button: {
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  item: {
    borderTopWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: 'gray',
    padding: 10,
    backgroundColor: 'green',
  },
});
