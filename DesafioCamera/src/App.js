import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Inicial from "./Screens/Inicial.js";
import CameraScreen from "./Screens/Camera/Index.js"; // <- usa o index.js da pasta Camera

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen
          name="Inicial"
          component={Inicial}
          options={{ title: "RecAudio" }}
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
