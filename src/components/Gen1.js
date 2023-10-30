import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokeGenCard from './PokeGenCard';

export default function Gen1() {
    return (
      <View style={styles.container}>
        <PokeGenCard genNum="1" />
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
  