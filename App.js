import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokeInfo from './src/components/PokeInfo';

export default function App() {
  return (
    <View style={styles.container}>
      <PokeInfo></PokeInfo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
