import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import CurrencyButton from './component/CurrencyButton';
import {currencyByRupee} from './constants';
import Snackbar from 'react-native-snackbar';

const CurrencyCalculator = () => {
  const [inputValue, setinputValue] = useState('');
  const [result, setResult] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const Convert = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
    const amount = parseFloat(inputValue);
    if (!isNaN(amount)) {
      const convertedValue = amount * targetValue.value;
      const resultValue = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResult(resultValue);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'NOt a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            style={styles.TxtInput}
              placeholder="Enter Value"
              keyboardType="number-pad"
              value={inputValue}
              onChangeText={setinputValue}
            />
          </View>
          <View>
            {result && <Text style={styles.resultTxt}>{result}</Text>}
          </View>
        </View>
        <View  style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            nestedScrollEnabled={true}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => Convert(item)}>
                <CurrencyButton {...item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default CurrencyCalculator;

const styles = StyleSheet.create({
  container: {
    height:760,
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TxtInput: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 2,
    borderRadius: 4,
    fontSize:20
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
