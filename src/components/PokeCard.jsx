import {Text, View} from 'react-native';
import { useRoute } from '@react-navigation/native';
import React from 'react';

function PokeCard() {
  const route = useRoute();
  const { pokemonName } = route.params;

  return (
    <View>
      <Text>{pokemonName}</Text>
    </View>
  );
}

export default PokeCard;
