import { View, Text, TouchableOpacity } from "react-native";

export function Configurations({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
            <View style={{ margin: 20, padding: 20 }}>
                <Text>Opções</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Configurações de fonte')}>
                    <Text>Configurações de fontes</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Configurações de cores')}>
                    <Text>Configurações de cores</Text>
                </TouchableOpacity>
            </View>
		</View>
	);
}
