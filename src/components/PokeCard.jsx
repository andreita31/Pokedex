import {Text, View} from 'react-native';
import { useRoute } from '@react-navigation/native';
import React from 'react';

function PokeCard() {
  const route = useRoute();
  const { pokemonName } = route.params; // Obtener el nombre del Pokémon de los parámetros de la ruta

  return (
    <View>
      <Text>{pokemonName}</Text>
    </View>
  );
}

export default PokeCard;
