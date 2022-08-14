
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { PlayerScreen } from '../screens/PlayerScreen';
import { Search } from '../screens/Search';
import { Profile } from '../screens/Profile';
import { soundsData } from '../data/sounds';
import { useSound } from '../Hooks/useSound';
import { memo } from 'react';



const Stack = createStackNavigator();

function StackNavigator({globalSound}) {

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={memo(function RenderHomeScreen(props) {
                    return <Home {...props} globalSound={globalSound} />
                })}
			/>

			<Stack.Screen
				name="Player"
				component={memo(function RenderPlayerScreen(props) {
						return <PlayerScreen {...props} globalSound={globalSound} />
                })}
			/>
		</Stack.Navigator>
	);
}


const Tabs = createBottomTabNavigator();

export function Routes() {

    const globalSound = useSound(soundsData)

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
					component={memo(function RenderStackNavigator(props) {
						return <StackNavigator {...props} globalSound={globalSound} />
					})}
				/>

				<Tabs.Screen
					name="Search"
					component={memo(function RenderSearch(props) {
						return <Search {...props} globalSound={globalSound} />
					})}
				/>

				<Tabs.Screen
					name="Profile"
					component={memo(function RenderProfile(props) {
						return <Profile {...props} globalSound={globalSound} />
					})}
				/>
			</Tabs.Navigator>
		</NavigationContainer>
	)
}

