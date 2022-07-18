import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstScreen from './source/FirstScreen';
import StatesScreen from './source/StatesScreen';

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
				<Tabs.Screen name="Primeira tela" component={FirstScreen} />
				<Tabs.Screen name="Segunda tela" component={StatesScreen} />
			</Tabs.Navigator>
		</NavigationContainer>
	)
}

