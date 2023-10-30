import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

function PokeInfo({ pokeName }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [generationData, setGenerationData] = useState(null);
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });

    axios
      .get(speciesUrl)
      .then((response) => {
        const generationUrl = response.data.generation.url;
        axios.get(generationUrl).then((genResponse) => {
          setGenerationData(genResponse.data);
        });
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, [pokeName]);

  if (!pokemonData || !generationData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.pokemonName}>
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </Text>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`,
          }}
          style={{ width: 300, height: 300 }}
        />
        <Text style={styles.boldText}>Generación:</Text>
        <Text>{generationData.name}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.column}>
            <Text style={styles.boldText}>Altura:</Text>
            <Text>{pokemonData.height}</Text>
            <Text style={styles.boldText}>Especie:</Text>
            <Text>{pokemonData.species.name}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.boldText}>Peso:</Text>
            <Text>{pokemonData.weight}</Text>
            <Text style={styles.boldText}>Tipo:</Text>
            <Text>{pokemonData.types[0].type.name}</Text>
          </View>
        </View>
        <View style={styles.statsHeader}>
        <Text style={styles.boldText}>Estadísticas Base:</Text>
      </View>
        <View style={styles.statsContainer}>
          {pokemonData.stats.map((stat) => (
            <View key={stat.stat.name} style={styles.stat}>
              <Text style={styles.boldText}>{stat.stat.name}:</Text>
              <Text>{stat.base_stat}</Text>
            </View>
          ))}
        </View>
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
  pokemonName: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  stat: {
    width: '45%', 
    marginBottom: 10,
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  centeredText: {
    textAlign: 'center',
  },
  statsHeader: {
    marginTop: 10, 
  },
});

export default PokeInfo;
