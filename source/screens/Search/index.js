import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Music } from '../../components/Music';
// import { useFonts, Montserrat_400Regular,} from '@expo-google-fonts/montserrat'


export function Search({ navigation }) {

    return (
        <View style={styles.pageAppearance}>

            <View style={styles.topContainer}>
                <Text style={styles.searchTop}>Pesquisa</Text>

                <StatusBar 
					style= "light"
					backgroundColor= "blue"
					color = "white"
                />
            </View>

            <View> 
                <Text style={styles.primerText}>Últimas tocadas</Text>

                <Music />
                <Music />
                <Music />
            </View>

            <View> 
                <Text style={styles.primerText}>Todas</Text>

                <Music />
                <Music />
                <Music />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({

    pageAppearance: {
        backgroundColor: 'black',
        flex: 1,
    },

    topContainer: {
        width: '100%',
        height: 80,
        backgroundColor: 'blue',

        justifyContent: 'center',
        marginTop: 20, 
    },

    searchTop: {
        fontSize: 24, 
        color: 'white', 
        fontWeight: 'bold', 
        margin: 20, 
    },

    primerText: {
        fontSize: 16,
        color: 'white', 
        fontWeight: 'bold', 
        margin: 20,
    },

});

