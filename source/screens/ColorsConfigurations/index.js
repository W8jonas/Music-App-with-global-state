import { View, Text, TouchableOpacity } from "react-native";

export function ColorsConfigurations({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
            <View style={{ margin: 20, padding: 20 }}>
                <Text>Configurações de cores</Text>
                
                <TouchableOpacity onPress={() => {}}>
                    <Text>Cores escuras</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {}}>
                    <Text>Cores claras</Text>
                </TouchableOpacity>
            </View>
		</View>
	);
}
