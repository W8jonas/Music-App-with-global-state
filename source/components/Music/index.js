import { Image, StyleSheet, Text, View } from 'react-native';
import defaultImage from '../../assets/emptyMusicValue.jpeg';

export function Music(props) {
    return (

        <View styles={styles.musicComponent}>

            <Image style={styles.musicImage} source={defaultImage}></Image>
            <View style={styles.musicText}>
                <Text style={styles.musicName}>Nome da Música</Text>
                <Text style={styles.musicArtist}>Artista</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    musicComponent: {
        margin: 20,
        flexDirection: 'row',
    },

    musicText: {
        flexDirection: 'column',
    },

    musicName: {
        fontSize: 14,
        color: 'white', 
    },

    musicArtist: {
        fontSize: 12,
        color: 'white', 
    },

    musicImage: {
        width: 64,
        height: 65,
        borderRadius: 6,
        backgroundColor: 'gray',
    }

});
