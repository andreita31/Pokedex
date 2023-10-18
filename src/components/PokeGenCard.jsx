import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import {Text, View} from 'react-native';
import { FlatList} from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

function PokeGenCard(props){

    const [pokemonData, setPokemonData] = useState([]);
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=2/';

    useEffect(() => {
    // Hacer una solicitud a la API para obtener una lista de Pokémon
        axios.get(apiUrl)
            .then((response) => {
                setPokemonData(response.data.results);
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API', error);
            });
    }, []);

    return (
        // <View style={styles.container}>
        //     <Pressable>
        //         <View>
        //             <View style={styles.imgContainer}>
        //                 <Image style={styles.img} src={}/>
        //             </View>
        //             <Text style={styles.pokemonText}>Pokemon Gen: {props.genNum}</Text>   
        //             <Text>
        //                 {data}
        //             </Text>
        //         </View>
        //     </Pressable>
        // </View>
        <View>
            {pokemonData.map(pokemon => (
                <Card key={pokemon.name}>
                    <Image
                        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png` }}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text>{pokemon.name}</Text>
                    <Text>{pokemon.name}</Text>
                </Card>
            ))}
        </View>
    );
}

// const styles = StyleSheet.create({
//     container:{
//         width: 150,
//         display: 'flex',
//         flexDirection: 'column',
//         borderWidth: 2,
//         borderStyle: 'solid',
//         borderColor: '#000',
//         borderRadius: 10,
//         padding: 15,
//         overflow: 'hidden'
//     },
//     imgContainer: {
//         width: '100%',
//     },
//     img: {
//         width: '100%',
//         height: 100
//     },
//     pokemonText: {
//         fontSize: 20,
//         fontWeight: 'bold'
//     },
// });

export default PokeGenCard;