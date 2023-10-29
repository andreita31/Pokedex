import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


function PokeGenCard({ genNum }) {
  const [pokemonData, setPokemonData] = useState([]);
  const apiUrl = `https://pokeapi.co/api/v2/generation/${genNum}`;

  useEffect(() => {
    // Hacer una solicitud a la API para obtener una lista de Pokémon
    axios
      .get(apiUrl)
      .then((response) => {
        setPokemonData(response.data.pokemon_species);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, [genNum]);

  const handleItemPress = (pokemonName) => {
    // Redirigir a otra pantalla con el nombre del Pokémon tocado
    navigation.navigate('PokeCard', { pokemonName });
    console.log(pokemonName);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item.name)}>
      <Card key={item.name} style={styles.card}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png`,
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text>{item.name}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    margin: 8,
  },
});

export default PokeGenCard;