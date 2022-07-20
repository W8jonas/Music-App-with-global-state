import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native';

export function Home({ navigation }) {
	return (
		<ScrollView>
			<Text style={styles.title}>Texto Home</Text>

			<TouchableOpacity onPress={() => {}}>
				<Text>Texto Home</Text>
			</TouchableOpacity>

		</ScrollView>
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

