import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Configurations } from './source/screens/Configurations';
import { FontConfigurations } from './source/screens/FontConfigurations';
import { ColorsConfigurations } from './source/screens/ColorsConfigurations';
import { Home } from './source/screens/Home';
import { useState } from 'react';


const Stack = createStackNavigator();

function StackNavigator({handleUpdateFonte, fontSize}) {

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Configurações"
				component={Configurations}
			/>

			<Stack.Screen
				name="Configurações de fonte"
				component={
					function RenderFontConfigurations(props) {
						return (
							<FontConfigurations
								{...props}
								handleUpdateFonte={handleUpdateFonte}
								fontSize={fontSize}
							/>
						)
					}
				}
			/>

			<Stack.Screen
				name="Configurações de cores"
				component={ColorsConfigurations}
			/>
		</Stack.Navigator>
	);
}


const Tabs = createBottomTabNavigator();

export default function App() {

	const [fontSize, setFontSize] = useState(16)

	function handleUpdateFonte(newFontSize) {
		setFontSize(newFontSize)
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
					component={function RenderHome(props) {
						return <Home {...props} fontSize={fontSize} />
					}}
				/>

				<Tabs.Screen
					name="Configurações"
					component={function RenderStackNavigator(props) {
						return <StackNavigator {...props} handleUpdateFonte={handleUpdateFonte} fontSize={fontSize} />
					}}
				/>

			</Tabs.Navigator>
		</NavigationContainer>
	)
}
