import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

function PokeGenCard(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const apiUrl = 'https://pokeapi.co/api/v2/generation/1';

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
  }, []);

  const renderItem = ({ item }) => (
    <Card key={item.name} style={styles.card}>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png`,
        }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{item.name}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2} // Aquí se especifica el número de columnas
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
