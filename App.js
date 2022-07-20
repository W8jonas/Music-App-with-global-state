import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Profile } from './source/screens/Profile';
import { PlayerScreen } from './source/screens/PlayerScreen';
import { Search } from './source/screens/Search';
import { Home } from './source/screens/Home';


const Stack = createStackNavigator();

function StackNavigator() {

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
			/>

			<Stack.Screen
				name="Player"
				component={
					function RenderFontConfigurations(props) {
						return (
							<PlayerScreen
								{...props}
							/>
						)
					}
				}
			/>
		</Stack.Navigator>
	);
}


const Tabs = createBottomTabNavigator();

export default function App() {

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
						return <StackNavigator {...props} />
					}}
				/>

				<Tabs.Screen
					name="Search"
					component={function RenderSearch(props) {
						return <Search {...props} />
					}}
				/>

				<Tabs.Screen
					name="Profile"
					component={function RenderProfile(props) {
						return <Profile {...props} />
					}}
				/>
			</Tabs.Navigator>
		</NavigationContainer>
	)
}
