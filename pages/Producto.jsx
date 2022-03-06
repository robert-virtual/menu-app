import { Text, StyleSheet, View } from "react-native";

export function Producto({ route }) {
  const { nombre, descripcion } = route.params;
  console.log(nombre, descripcion);
  return (
    <View style={styles.container}>
      <Text>{nombre}</Text>
      <Text>{descripcion}</Text>
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
