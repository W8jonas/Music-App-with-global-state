import { Audio } from 'expo-av';
import { useEffect, useState, useCallback } from 'react';


export function useSound(soundsData) {

    const [sound, setSound] = useState();
	const [actualSoundData, setActualSoundData] = useState(soundsData[0])

	const [soundPlayingNow, setSoundPlayingNow] = useState(false)


	// async function playSound(_newSoundToPlay) {
	// 	console.log('playSound', _newSoundToPlay)
	// 	const newSoundToPlay = _newSoundToPlay ? _newSoundToPlay : actualSoundData

	// 	const { sound: _sound, status } = await Audio.Sound.createAsync({ uri: newSoundToPlay.uri });

	// 	setSound(_sound);
	// 	setActualSoundData({...newSoundToPlay, details: status})

	// 	await _sound.playAsync();
	// 	setSoundPlayingNow(true)
	// }

	const playSound = useCallback(async (_newSoundToPlay) => {
		console.log('playSound', _newSoundToPlay)
		const newSoundToPlay = _newSoundToPlay ? _newSoundToPlay : actualSoundData

		const { sound: _sound, status } = await Audio.Sound.createAsync({ uri: newSoundToPlay.uri });

		setSound(_sound);
		setActualSoundData({...newSoundToPlay, details: status})

		await _sound.playAsync();
		setSoundPlayingNow(true)
	}, [actualSoundData])


	// function handleChangeActualSound(changeType) {
	// 	const actualSoundIndex = soundsData.findIndex(sounds => sounds.id === actualSoundData.id ? true : false)

	// 	if (changeType === '-') {
	// 		const newSoundDataIndex = actualSoundIndex > 0 ? actualSoundIndex - 1 : 0
	// 		playSound(soundsData[newSoundDataIndex])

	// 		return
	// 	}

	// 	if (changeType === '+') {
	// 		const newSoundDataIndex = actualSoundIndex < soundsData.length - 1 ? actualSoundIndex + 1 : soundsData.length - 1
	// 		playSound(soundsData[newSoundDataIndex])

	// 		return
	// 	}
	// }

	const handleChangeActualSound = useCallback((changeType) => {
		const actualSoundIndex = soundsData.findIndex(sounds => sounds.id === actualSoundData.id ? true : false)

		if (changeType === '-') {
			const newSoundDataIndex = actualSoundIndex > 0 ? actualSoundIndex - 1 : 0
			playSound(soundsData[newSoundDataIndex])

			return
		}

		if (changeType === '+') {
			const newSoundDataIndex = actualSoundIndex < soundsData.length - 1 ? actualSoundIndex + 1 : soundsData.length - 1
			playSound(soundsData[newSoundDataIndex])

			return
		}
	}, [soundsData, actualSoundData])

	// function pauseSound() {
	// 	sound.pauseAsync()
	// 	setSoundPlayingNow(false)
	// }

	const pauseSound = useCallback(() => {
		sound.pauseAsync()
		setSoundPlayingNow(false)
	}, [sound])

	useEffect(() => {
		return sound
			? () => {
				sound.unloadAsync();
			}
			: undefined;
	}, [sound]);

    return {
        sound, actualSoundData, soundPlayingNow, soundsData, playSound, handleChangeActualSound, pauseSound
    }
}
