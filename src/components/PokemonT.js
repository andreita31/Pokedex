import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokeInfo from './PokeInfo';

export default function PokemonT({route}) {
  const { pokeName } = route.params || {};

  
    return (
      <View style={styles.container}>
        <PokeInfo pokeName={pokeName}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  