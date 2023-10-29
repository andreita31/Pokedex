import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from './src/components/Pokedex'; // Importa el componente Pokedex
//import SignUp from './SignUp'; // Importa el componente SignUp
import Gen1 from './src/components/Gen1';

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
          name="Gen1"
          component={Gen1}
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
