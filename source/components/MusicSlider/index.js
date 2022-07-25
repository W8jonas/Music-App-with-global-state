import { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';


export function MusicSlider({soundDuration, sound}) {

    const [actualValueSound, setActualValueSound] = useState(0)

    useEffect(() => {
		if (sound) {
			sound.setOnPlaybackStatusUpdate((data) => {
                setActualValueSound(data.positionMillis)
            })
		}
	}, [sound]);

    return (
        <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={soundDuration || 0}
            minimumTrackTintColor="#C07037"
            thumbTintColor="red"
            maximumTrackTintColor="#000"
            value={actualValueSound || 0}
            // onSlidingComplete={handleSeek}
        /> 
    )
}

