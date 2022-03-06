import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { useState, useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

export function Inicio({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginEnd: 10 }}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  const [items, setItems] = useState(
    Array.from(Array(50), (v, i) => ({
      nombre: "Prod " + i,
      descripcion: "Descripcion " + i,
    }))
  );
  function navegar(item) {
    console.log(item);
    navigation.navigate("Producto", item);
  }
  return (
    <View style={styles.container}>
      <Text>Inicio</Text>

      <FlatList
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navegar(item)}
            style={{ padding: 15 }}
          >
            <Text>{item.nombre}</Text>
            <Text>{item.descripcion}</Text>
          </TouchableOpacity>
        )}
        data={items}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
