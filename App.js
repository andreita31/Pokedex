import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from './src/components/Pokedex'; // Importa el componente Pokedex
//import SignUp from './SignUp'; // Importa el componente SignUp
import Generacion from './src/components/Generacion';
import PokemonT from './src/components/PokemonT';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="POKEDEX"
          component={Pokedex}
          options={{
            headerStyle: {
              backgroundColor: '#dc0a2d', 
              
            },
          }}
        />
        <Stack.Screen
          name="Generacion"
          component={Generacion}
          options={{
            headerStyle: {
              backgroundColor: '#dc0a2d',
            },
          }}
        />
         <Stack.Screen
          name="PokemonT"
          component={PokemonT}
          options={{
            headerStyle: {
              backgroundColor: '#008500', // Cambia el color de fondo de la barra de navegación
              
            },
          }}
        />
      </Stack.Navigator>
      

      
      
    </NavigationContainer>
  );
};

export default AppNavigator;