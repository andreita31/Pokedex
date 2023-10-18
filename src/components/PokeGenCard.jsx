import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

function PokeGenCard(props) {
  const [pokemonData, setPokemonData] = useState([]);

  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${props.limit}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setPokemonData(response.data.results);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, [props.limit]);

  return (
    <View>
      {pokemonData.map((pokemon, index) => (
        <Card key={pokemon.name}>
          <Image
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` }}
            style={{ width: 100, height: 100 }}
          />
          <Text>#{index + 1}</Text>
          <Text>{pokemon.name}</Text>
        </Card>
      ))}
    </View>
  );
}

export default PokeGenCard;
