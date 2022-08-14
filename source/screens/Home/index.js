import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';

export function Home({ navigation, globalSound}) {

	const { actualSoundData, soundPlayingNow, pauseSound, playSound } = globalSound

	return (
		<ScrollView>

			<View>
				<Text style={[styles.baseText, styles.title]} >{actualSoundData.title}</Text>
				<Text style={styles.baseText} >{actualSoundData.author}</Text>
			</View>

			<Text style={styles.title}>Texto Home</Text>

			<TouchableOpacity onPress={() => {navigation.navigate('Player')}}>
				<Text>Texto Home</Text>
			</TouchableOpacity>

			{soundPlayingNow ? <TouchableOpacity onPress={pauseSound}>
					<Text style={styles.baseText} >Pausar</Text>
				</TouchableOpacity> 
				: <TouchableOpacity onPress={() => playSound()}>
					<Text style={styles.baseText} >Iniciar</Text>
				</TouchableOpacity>
			}

		</ScrollView>
	);
}


const styles = StyleSheet.create({
	titleContainer: {
		width: '100%',
		height: 80,
		backgroundColor: '#6FCF97',

		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		color: '#FFFFFF',
		fontSize: 20,
		marginTop: 20,
	},
	title: {
		textAlign: 'center',
		marginTop: 40,
		fontSize: 24,
	},
	titleList: {
		fontSize: 16,
		marginTop: 36,
	}
});

