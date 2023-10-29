import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from './src/components/Pokedex'; // Importa el componente Pokedex
import Generacion from './src/components/Generacion';
import PokeCard from './src/components/PokeCard';

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
              backgroundColor: '#dc0a2d', // Cambia el color de fondo de la barra de navegación
              
            },
          }}
        />
        <Stack.Screen
          name="Generacion"
          component={Generacion}
          options={{
            headerStyle: {
              backgroundColor: '#dc0a2d', // Cambia el color de fondo de la barra de navegación
            },
          }}
        />
         <Stack.Screen
          name="PokeCard"
          component={PokeCard}
          options={{
            headerStyle: {
              backgroundColor: '#dc0a2d', // Cambia el color de fondo de la barra de navegación
              
            },
          }}
        />
      </Stack.Navigator>
      

      
      
    </NavigationContainer>
  );
};

export default AppNavigator;
