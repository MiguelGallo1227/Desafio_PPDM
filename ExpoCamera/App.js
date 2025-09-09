import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import CameraScreen from "./Screens/Camera/Index"; // <- usa o index.js da pasta Camera
import Inicial from "./Screens/Gallery/Inicial";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen
          name="Inicial"
          component={Inicial}
          options={{ title: "Desafio" }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: "Câmera" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
