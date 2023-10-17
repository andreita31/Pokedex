import {Text, View} from 'react-native';
import { TouchableHighlight } from 'react-native-web';

function PokeGenCard(){
    return (
        <View>
            <TouchableHighlight>
                <View>
                    <Image style={StyleSheet.img} ></Image>
                </View>
                <Tex>Pokemon</Tex>
                <Tex>Gen</Tex>
            </TouchableHighlight>
        </View>
    );
}

export default PokeGenCard;