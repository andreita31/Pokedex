import React from 'react';
import { View, Text } from 'react-native';
import PokeGenCard from './PokeGenCard';

function PokeInfo() {
  return (
    <View>
      <Text>Información detallada del Pokémon:</Text>
      {/* Renderiza el componente PokeGenCard aquí */}
      <PokeGenCard genNum={1} /> {/* Puedes pasar el número de generación como prop */}
    </View>
  );
}

export default PokeInfo;
