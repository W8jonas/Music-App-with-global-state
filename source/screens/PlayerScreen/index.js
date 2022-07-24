import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Audio } from 'expo-av';

import imgMusic from '../../assets/emptyMusicValue.jpeg'

const screenWidth = Dimensions.get('window').width

import {soundsData} from '../../data/sounds'


export function PlayerScreen() {

	const [sound, setSound] = useState();

	async function playSound() {
		console.log('Loading Sound');
		const { sound } = await Audio.Sound.createAsync({uri: soundsData[0].uri});
		setSound(sound);

		console.log('Playing Sound');
		await sound.playAsync();
	}

	useEffect(() => {
		return sound
			? () => {
				console.log('Unloading Sound');
				sound.unloadAsync();
			}
			: undefined;
	}, [sound]);

	return (
		<View style={{ flex: 1, margin: 20, padding: 20, alignItems: 'center', justifyContent: 'space-around' }}>

			<Text>Nome da música</Text>

			<Image style={{ width: screenWidth * 0.9, height: screenWidth * 0.9 }} source={imgMusic} />

			<View>
				<Text>Nome da música</Text>
				<Text>Nome da música</Text>
			</View>

			<View>
				<Text>Progress bar</Text>
			</View>

			<View>
				<TouchableOpacity onPress={() => {}}>
					<Text>Anterior</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={playSound}>
					<Text>Iniciar</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {}}>
					<Text>Próxima</Text>
				</TouchableOpacity>

			</View>
		</View>
	);
}
