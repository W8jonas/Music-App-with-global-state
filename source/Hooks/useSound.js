import { Audio } from 'expo-av';
import { useEffect, useState, useCallback } from 'react';


export function useSound(soundsData) {

    const [sound, setSound] = useState();
	const [actualSoundData, setActualSoundData] = useState(soundsData[0])

	const [soundPlayingNow, setSoundPlayingNow] = useState(false)

	const playSound = useCallback(async (_newSoundToPlay) => {
		const newSoundToPlay = _newSoundToPlay ? _newSoundToPlay : actualSoundData

		const { sound: _sound, status } = await Audio.Sound.createAsync({ uri: newSoundToPlay.uri });

		setSound(_sound);
		setActualSoundData({...newSoundToPlay, details: status})

		await _sound.playAsync();
		setSoundPlayingNow(true)
	}, [actualSoundData])

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
