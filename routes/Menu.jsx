import { createDrawerNavigator } from "@react-navigation/drawer";
import { Acercade } from "../pages/Acercade";
import { Cart } from "../pages/Cart";
import { Contacto } from "../pages/Contacto";
import { Inicio } from "../pages/Inicio";

const Menu = createDrawerNavigator();

export function MenuComponet() {
  return (
    <Menu.Navigator>
      <Menu.Screen name="Inicio" component={Inicio} />
      <Menu.Screen name="Contacto" component={Contacto} />
      <Menu.Screen name="Acercade" component={Acercade} />
    </Menu.Navigator>
  );
}
