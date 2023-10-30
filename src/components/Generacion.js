import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokeGenCard from './PokeGenCard';

export default function Generacion({ route }) {
    const { genNum } = route.params;
  
    return (
      <View style={styles.container}>
        <PokeGenCard genNum={genNum} />
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
  