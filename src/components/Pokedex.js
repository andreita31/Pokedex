import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Pokedex({ navigation }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (generation) => {
    if (generation === 1) {
      navigation.navigate('Gen1');
    }else if (generation === 2) {
        navigation.navigate('Gen1');
      }
  };

  const handleSearchButton = () => {
    console.log("sss")
  };

  const handleGenerationBox = (generation) => {
    handleSearch(generation);
  };

  const renderGenerationBoxes = () => {
    const generations = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

    return generations.map((generation) => (
      <TouchableOpacity
        key={generation}
        style={styles.generationBox}
        onPress={() => handleGenerationBox(generation)}
      >
        <Text style={styles.genText}>{`GEN ${generation}`}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Buscar"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <Button title="Buscar" onPress={handleSearchButton} />
        </View>
      </View>
      <View style={styles.generationContainer}>
        {renderGenerationBoxes()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '99%',
    height: '99%',
    backgroundColor: '#dc0a2d',
  },
  headerContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    backgroundColor: '#dedede',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 20,
    padding: 5,
    marginRight: 10,
    backgroundColor: '#242424',
    placeholderTextColor: 'white'
  },
  generationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  generationBox: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    width: '45%',
    backgroundColor: '#29aafd',
    marginTop: 15,
  },
  genText: {
    fontSize: 20,
  },
  button: {
    backgroundColor: '#dedede',
    padding: 5,
    borderRadius: 5,
    width: '85%',
    marginBottom: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default Pokedex;
