import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Audio } from 'expo-av';

import imgMusic from '../../assets/emptyMusicValue.jpeg'

const screenWidth = Dimensions.get('window').width

import {soundsData} from '../../data/sounds'

export function PlayerScreen() {

	const [sound, setSound] = useState();
	const [actualSoundData, setActualSoundData] = useState(soundsData[0])

	async function playSound() {
		const { sound } = await Audio.Sound.createAsync({uri: actualSoundData.uri});
		setSound(sound);

		await sound.playAsync();
	}

	useEffect(() => {
		return sound
			? () => {
				sound.unloadAsync();
			}
			: undefined;
	}, [sound]);


	function handleChangeActualSound(changeType) {

		const actualSoundIndex = soundsData.findIndex(sounds => sounds.id === actualSoundData.id ? true : false)

		if (changeType === '-') {

			const newSoundDataIndex = actualSoundIndex > 0 ? soundsData.length - 1 : 0
			setActualSoundData(soundsData[newSoundDataIndex])

			return
		}

		if (changeType === '+') {

			const newSoundDataIndex = actualSoundIndex < soundsData.length - 1 ? actualSoundIndex + 1 : soundsData.length - 1
			setActualSoundData(soundsData[newSoundDataIndex])
			
			return
		}
	}


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
				<TouchableOpacity onPress={() => {handleChangeActualSound('-')}}>
					<Text>Anterior</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={playSound}>
					<Text>Iniciar</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {handleChangeActualSound('+')}}>
					<Text>Próxima</Text>
				</TouchableOpacity>

			</View>
		</View>
	);
}
