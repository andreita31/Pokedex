import {StyleSheet, Text, View} from 'react-native';
import { Image } from 'react-native-elements';
import PokeGenCard from './PokeGenCard';

function PokeCard(){
    return (
        <View style={styles.container}>
            <View style={styles.basicInfo}>
                <Text style={styles.name}>Bulbasaur</Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' }}/>
                </View>
                <View style={styles.descFeatsContainer}>
                    <Text style={styles.description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta magnam nobis, repudiandae quam ab vitae dignissimos doloremque unde asperiores?
                    </Text>
                    <View style={styles.featuresContainer}>
                        <View>
                            <Text style={styles.featureName}>Height</Text>
                            <Text style={styles.feature}>2' 04"</Text>
                        </View>
                        <View>
                            <Text style={styles.featureName}>Weight</Text>
                            <Text style={styles.feature}>15.2 lbs</Text>
                        </View>
                        <View>
                            <Text style={styles.featureName}>Category</Text>
                            <Text style={styles.feature}>Seed</Text>
                        </View>
                        <View>
                            <Text style={styles.featureName}>Abilities</Text>
                            <Text style={styles.feature}>Overgrow</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.moreInfo}>
                <View style={styles.type}>
                    <Text>Grass</Text>
                    <Text>Poison</Text>
                </View>
                <View style={styles.weaknesses}>
                    <Text>Fire</Text>
                    <Text>Psychic</Text>
                    <Text>Flayin</Text>
                    <Text>Ice</Text>
                </View>
            </View>
            <View>
                <Text>Información detallada del Pokémon:</Text>
                {/* Renderiza el componente PokeGenCard aquí */}
                <PokeGenCard genNum={1} /> {/* Puedes pasar el número de generación como prop */}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: 15,
        justifyContent: 'space-evenly',
        backgroundColor: '#f2f2f2'
    },
    basicInfo: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        width: '100%',
        height: 'auto'
    },
    name: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
    },
    imgContainer: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    descFeatsContainer: {
        display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        width: '100%',
        height: 'auto'
    },
    img: {
        // width: '100%',
        height: 200
    },
    description:{
        fontSize: 18,
        textAlign: 'justify',
        paddingTop: 15,
        paddingBottom: 15,
    },
    featuresContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#20b2aa',
        padding: 15,
        borderRadius: 10,
    },
    featureName: {
        fontSize: 18,
        color: '#fff'
    },
    feature: {
        fontSize: 18,
        color: '#000'
    },
    moreInfo:{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
    },
    type: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 25
    },
    weaknesses: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default PokeInfo;
