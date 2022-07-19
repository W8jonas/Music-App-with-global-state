import {useState, useEffect, useMemo} from 'react'

import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

function RenderTitle(props) {
	return <Text style={props.customStyle}>{props.text}</Text>
}

export default function StatesScreen({ navigation }) {

	const [counter, setCounter] = useState(0)

	const doubleCounter = useMemo(() => {
		return counter * 2
	}, [counter])


	return (
		<View>
			<View style={styles.titleContainer}>
				<RenderTitle
					text={"Aprendendo estados"}
					customStyle={styles.titleText}
				/>
			</View>

			<TouchableOpacity onPress={() => { setCounter((oldCounter) => oldCounter + 1)} }>
				<Text>Acumular</Text>
			</TouchableOpacity>

			<Text>Valor: {counter}</Text>
			<Text>Valor dobrado: {doubleCounter}</Text>


			<Button
				title="Voltar para primeira tela"
				onPress={() => navigation.navigate('Primeira tela')}
			/>

		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		width: '100%',
		height: 80,
		backgroundColor: '#6FCF97',

		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		color: '#FFFFFF',
		fontSize: 20,
		marginTop: 20,
	},
	title: {
		textAlign: 'center',
		marginTop: 40,
		fontSize: 24,
	},
	titleList: {
		fontSize: 16,
		marginTop: 36,
	}
});



