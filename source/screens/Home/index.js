import { useState, useMemo } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';

function RenderTitle(props) {
	return <Text style={props.customStyle}>{props.text}</Text>
}

function RenderRow(props) {
	return <Text style={props.customStyle}>{props.text}</Text>
}


function RenderList(props) {

	return (
		<>
			<Text style={styles.titleList} >
				{props.title}
			</Text>

			{props.names.map(function (name) {
				return <RenderRow key={name} text={name} customStyle={{}} />
			})}
		</>
	)
}


const OrderTypes = {
	asc: 'asc',
	desc: 'desc',
}

export function Home({ navigation, fontSize }) {

	const [order, setOrder] = useState(OrderTypes.asc)

	function handleUpdateOrder() {
		setOrder(oldValue => oldValue === OrderTypes.asc ? OrderTypes.desc : OrderTypes.asc)
	}

	const listNamesOrder = useMemo(() => {
		const newList = ["Ana", "Edney", "Jonas", "Gabi", "Vinícius"].sort((a, b) => {
			if (order === OrderTypes.asc) {
				return a.localeCompare(b)
			}
			return b.localeCompare(a)
		})

		return newList
	}, [order])

	return (
		<View>
			<View style={styles.titleContainer}>
				<RenderTitle
					text={"Primeira tela js!"}
					customStyle={{...styles.titleText, fontSize}}
				/>
			</View>

			<ScrollView>
				<Text style={styles.title}>Desenvolvimento do app</Text>

				<TouchableOpacity onPress={handleUpdateOrder}>
					<Text>Alterar ordem da lista</Text>
				</TouchableOpacity>

				<RenderList
					title="Lista de participantes do projeto:"
					names={listNamesOrder}
				/>

			<Button
				title="Mudar para segunda tela "
				onPress={() => navigation.navigate('Segunda tela')}
			/>
			</ScrollView>

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

