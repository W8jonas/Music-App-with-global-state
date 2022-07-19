import { View, Text, TouchableOpacity } from "react-native";

export function Configurations({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ margin: 20, padding: 20 }}>
        <Text style={{ margin: 10 }}>Opções</Text>

        <TouchableOpacity
            onPress={() => navigation.navigate('Configurações de fonte')}
            style={{ margin: 10 }}
          >
          <Text>Configurações de fontes</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate('Configurações de cores')}
            style={{ margin: 10 }}
          >
          <Text>Configurações de cores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
