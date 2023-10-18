import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import { styles } from '../styles';

const PokemonDetail = ({ route }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const { pokemonName } = route.params;
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [route.params]);

  return (
    <View style={styles.container}>
      {pokemonData && (
        <View>
          <Image
            source={{ uri: pokemonData.sprites.front_default }}
            style={styles.pokemonImage}
          />
          <Text style={styles.pokemonName}>{pokemonData.name}</Text>
          <Text>Height: {pokemonData.height} decimetres</Text>
          <Text>Weight: {pokemonData.weight} hectograms</Text>
        </View>
      )}
    </View>
  );
};

export default PokemonDetail;
