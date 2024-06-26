import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
interface User {
  id: number;
  title: string;
  url: string;
}
const ApiCall = () => {
  const [searchData, setSearchData] = useState('');
  const [searchResult, setSearchResult] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const SearchApi = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        searchData
          ? `https://jsonplaceholder.typicode.com/photos?q=${searchData}`
          : 'https://jsonplaceholder.typicode.com/photos?_limit=21&offset=4',
      );
      if (response) {
        setSearchResult(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    SearchApi();
  }, [searchData]);
  return (
    <View>
      <View style={styles.titleheader}>
        <Text style={styles.title}>ApiCall</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={searchData}
          onChangeText={(text: React.SetStateAction<string>) =>
            setSearchData(text)
          }
        />
      </View>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading ..... </Text>
        </View>
      ) : (
        <View style={[styles.outerCard]}>
          <FlatList
            numColumns={3}
            nestedScrollEnabled={true}
            data={searchResult}
            keyExtractor={({id}) => id.toString()}
            renderItem={({item}) => (
              <View style={styles.card}>
                <Text style={styles.titleText}>ID: {item.id}</Text>
                <Text numberOfLines={2} style={styles.apiTitle}>
                  {item.title}
                </Text>
                <TouchableOpacity>
                  <Image source={{uri: item.url}} style={styles.apiImage} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default ApiCall;

const styles = StyleSheet.create({
  titleheader: {
    alignItems: 'center',
    backgroundColor: '#ff9800',
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF',
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
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  loadingText: {
    fontSize: 20,
    color: 'white',
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
