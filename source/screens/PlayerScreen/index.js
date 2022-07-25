import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Audio } from 'expo-av';

import imgMusic from '../../assets/emptyMusicValue.jpeg'

const screenWidth = Dimensions.get('window').width

import { soundsData } from '../../data/sounds'

export function PlayerScreen() {

	const [sound, setSound] = useState();
	const [actualSoundData, setActualSoundData] = useState(soundsData[0])

	const [soundPlayingNow, setSoundPlayingNow] = useState(false)

	async function playSound(_newSoundToPlay) {

		const newSoundToPlay = _newSoundToPlay ? _newSoundToPlay : actualSoundData

		const { sound: _sound } = await Audio.Sound.createAsync({ uri: newSoundToPlay.uri });
		setSound(_sound);
		
		const status = await _sound.getStatusAsync()

		setActualSoundData({...newSoundToPlay, details: status})

		await _sound.playAsync();
		setSoundPlayingNow(true)
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
			playSound(soundsData[newSoundDataIndex])

			return
		}

		if (changeType === '+') {

			const newSoundDataIndex = actualSoundIndex < soundsData.length - 1 ? actualSoundIndex + 1 : soundsData.length - 1
			playSound(soundsData[newSoundDataIndex])

			return
		}
	}


	function pauseSound() {
		sound.pauseAsync()
	}


	return (
		<View style={{ flex: 1, margin: 20, padding: 20, alignItems: 'center', justifyContent: 'space-around' }}>

			<Text>{actualSoundData.source}</Text>

			<Image style={{ width: screenWidth * 0.9, height: screenWidth * 0.9 }} source={imgMusic} />

			<View>
				<Text>{actualSoundData.title}</Text>
				<Text>{actualSoundData.author}</Text>
			</View>

			<View>
				<Text>Progress bar</Text>
			</View>

			<View>
				<TouchableOpacity onPress={() => { handleChangeActualSound('-') }}>
					<Text>Anterior</Text>
				</TouchableOpacity>

				{soundPlayingNow ? <TouchableOpacity onPress={pauseSound}>
						<Text>Pausar</Text>
					</TouchableOpacity> 
					: <TouchableOpacity onPress={() => playSound()}>
						<Text>Iniciar</Text>
					</TouchableOpacity>
				}

				<TouchableOpacity onPress={() => { handleChangeActualSound('+') }}>
					<Text>Próxima</Text>
				</TouchableOpacity>

			</View>
		</View>
	);
}
