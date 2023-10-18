import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../components/PokemonDetail';

const AppNavigator = createStackNavigator(
  {
    Home: PokemonList,
    Detail: PokemonDetail,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
