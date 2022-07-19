import { View, Text, TouchableOpacity } from "react-native";

export function FontConfigurations({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
            <View style={{ margin: 20, padding: 20 }}>
                <Text>Tamanho das fontes:</Text>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Configurações de fonte')}>
                        <Text>16</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Configurações de fonte')}>
                        <Text>20</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Configurações de fonte')}>
                        <Text>24</Text>
                    </TouchableOpacity>
                </View>
            </View>
		</View>
	);
}
