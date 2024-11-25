// Importação dos componentes e bibliotecas necessárias
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen"; // Tela inicial (lista de histórias)
import StoryScreen from "./src/screens/StoryScreen"; // Tela de uma história específica

// Criação de uma pilha de navegação para alternar entre as telas
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Contêiner principal para gerenciar a navegação
    <NavigationContainer>
      <Stack.Navigator>
        {/* Definição da tela inicial */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Definição da tela de histórias */}
        <Stack.Screen name="Story" component={StoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
