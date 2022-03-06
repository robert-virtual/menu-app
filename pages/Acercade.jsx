import { Text, StyleSheet, View } from "react-native";

export function Acercade() {
  return (
    <View style={styles.container}>
      <Text>Acercade</Text>
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
