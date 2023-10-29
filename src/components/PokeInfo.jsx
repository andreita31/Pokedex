import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

function PokeInfo({ pokeName }) {
  const [pokemonData, setPokemonData] = useState(null);
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  //const apiUrl = `https://pokeapi.co/api/v2/pokemon/ditto`;
  useEffect(() => {
    // Hacer una solicitud a la API para obtener los datos del Pokémon
    axios
      .get(apiUrl)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, [pokeName]);

  if (!pokemonData) {
    return null; // Mientras se cargan los datos, no renderizamos nada
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text>{pokemonData.name}</Text>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`,
          }}
          style={{ width: 300, height: 300 }}
        />
        <Text>Altura: {pokemonData.height}</Text>
        <Text>Peso: {pokemonData.weight}</Text>
        <Text>Especie: {pokemonData.species.name}</Text>
        <Text>Tipo: {pokemonData.types[0].type.name}</Text>
      </Card>
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

export default PokeInfo;