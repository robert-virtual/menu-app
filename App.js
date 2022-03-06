import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuComponet } from "./routes/Menu";
import { Producto } from "./pages/Producto";
import { Cart } from "./pages/Cart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          options={{ headerShown: false }}
          component={MenuComponet}
        />
        <Stack.Screen name="Producto" component={Producto} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
