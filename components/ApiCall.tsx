import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
interface User {
  id: number;
  title: string;
  url: string;
}
const ApiCall = () => {
  const [searchData, setsearchData] = useState('');
  const [filteredResult, setFilteredResult] = useState<User[]>([]);
  const [searchResult, setsearchResult] = useState<User[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const Search = async () => {
    try {
      const response = await axios.get(
        searchData
          ? `https://jsonplaceholder.typicode.com/photos?q=${searchData}`
          : 'https://jsonplaceholder.typicode.com/photos?_limit=20&offset=4',
      );
      setsearchResult(response.data);
      setDataLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };
  const filterData = () => {
    const filteredData = searchResult.filter(data =>
      data.title.toLowerCase().includes(searchData.toLowerCase()),
    );
    setFilteredResult(filteredData);
  };
  const handleSearch = (text: string) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    const timeout = setTimeout(() => {
      setsearchData(text);
    }, 1000);
    setTypingTimeout(timeout);
  };
  useEffect(() => {
    Search();
  }, [searchData]);
  useEffect(() => {
    filterData();
  }, [searchData, searchResult]);

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.titleheader}>
          <Text style={styles.title}>Search Application</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type for Search..."
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={[styles.outerCard]}>
          <FlatList
            numColumns={3}
            nestedScrollEnabled={false}
            data={filteredResult}
            keyExtractor={({id}) => id.toString()}
            renderItem={({item}) => (
              <View style={styles.card}>
                <Text style={styles.titleText}>ID: {item.id}</Text>
                <TouchableOpacity>
                  <Image source={{uri: item.url}} style={styles.apiImage} />
                </TouchableOpacity>
                <Text numberOfLines={2} style={styles.apiTitle}>
                  {item.title}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
      <View>
        {dataLoaded ? (
          <View style={styles.footerCard1}></View>
        ) : (
          <View style={styles.footerCard}></View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#2E4C6D',
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
  },
  titleheader: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    color: '#DADDFC',
  },
  searchContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    color: '#DADDFC',
    width: '90%',
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 20,
  },
  body: {
    // paddingTop:150
  },

  outerCard: {
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
  },
  titleText: {
    fontSize: 19,
    color: 'white',
  },
  apiImage: {
    width: 80,
    height: 80,
    margin: 5,
    borderWidth: 2,
    borderColor: 'lightgray',
  },
  apiTitle: {
    fontSize: 15,
  },
  footerCard: {
    backgroundColor: '#F4A261',
    padding: 40,
  },
  footerCard1: {
    backgroundColor: '#F4A261',
    padding: 40,
  },
});
export default ApiCall;
