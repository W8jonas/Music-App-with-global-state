import { View, Text, TouchableOpacity } from "react-native";

export function FontConfigurations({handleUpdateFonte, fontSize}) {
	return (
		<View style={{ flex: 1 }}>
            <View style={{ margin: 20, padding: 20 }}>
                <Text>Tamanho das fontes:</Text>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress={() => handleUpdateFonte(16)}>
                        <Text style={{ fontSize: fontSize}}>16</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => handleUpdateFonte(20)}>
                        <Text style={{ fontSize: fontSize}}>20</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => handleUpdateFonte(24)}>
                        <Text style={{ fontSize: fontSize}}>24</Text>
                    </TouchableOpacity>
                </View>
            </View>
		</View>
	);
}
