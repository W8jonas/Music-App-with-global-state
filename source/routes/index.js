
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { PlayerScreen } from '../screens/PlayerScreen';
import { Search } from '../screens/Search';
import { Profile } from '../screens/Profile';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { soundsData } from '../data/sounds';



const Stack = createStackNavigator();

function StackNavigator({globalSound}) {

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
			/>

			<Stack.Screen
				name="Player"
				component={function RenderPlayerScreen(props) {
						return <PlayerScreen {...props} globalSound={globalSound} />
                }}
			/>
		</Stack.Navigator>
	);
}


const Tabs = createBottomTabNavigator();

export function Routes() {

    const [sound, setSound] = useState();
	const [actualSoundData, setActualSoundData] = useState(soundsData[0])

	const [soundPlayingNow, setSoundPlayingNow] = useState(false)


	async function playSound(_newSoundToPlay) {

		const newSoundToPlay = _newSoundToPlay ? _newSoundToPlay : actualSoundData

		const { sound: _sound, status } = await Audio.Sound.createAsync({ uri: newSoundToPlay.uri });

		setSound(_sound);
		setActualSoundData({...newSoundToPlay, details: status})

		await _sound.playAsync();
		setSoundPlayingNow(true)
	}


	function handleChangeActualSound(changeType) {

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
	}


	function pauseSound() {
		sound.pauseAsync()
		setSoundPlayingNow(false)
	}


	useEffect(() => {
		return sound
			? () => {
				sound.unloadAsync();
			}
			: undefined;
	}, [sound]);


    const globalSound = {
        sound, actualSoundData, soundPlayingNow, soundsData, playSound, handleChangeActualSound, pauseSound
    }

	return (
		<NavigationContainer>

			<Tabs.Navigator
				tabBarOptions={{
					style: {
						backgroundColor: 'light' == 'light' ? '#fff' : '#222',
						shadowColor: 'light' == 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
						shadowOpacity: 1,
						shadowRadius: 6,
					},
				}}
			>
				<Tabs.Screen
					name="Home"
					component={function RenderStackNavigator(props) {
						return <StackNavigator {...props} globalSound={globalSound} />
					}}
				/>

				<Tabs.Screen
					name="Search"
					component={function RenderSearch(props) {
						return <Search {...props} globalSound={globalSound} />
					}}
				/>

				<Tabs.Screen
					name="Profile"
					component={function RenderProfile(props) {
						return <Profile {...props} globalSound={globalSound} />
					}}
				/>
			</Tabs.Navigator>
		</NavigationContainer>
	)
}

