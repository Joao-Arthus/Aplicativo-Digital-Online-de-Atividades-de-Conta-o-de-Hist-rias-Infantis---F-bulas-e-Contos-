// Importação de componentes necessários
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Audio } from "expo-av";

export default function StoryScreen({ route }) {
  const { story } = route.params;
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playAudio() {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(story.audio);
      setSound(newSound);
      setIsPlaying(true);
      await newSound.playAsync();
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setIsPlaying(false);
        }
      });
    } catch (error) {
      console.log("Erro ao reproduzir áudio:", error);
    }
  }
  // Limpa o áudio ao sair da tela
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")} // Certifique-se de que o arquivo existe
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{story.title}</Text>
        <Image source={story.image} style={styles.image} />
        <TouchableOpacity
          style={[styles.button, isPlaying && styles.buttonDisabled]}
          onPress={playAudio}
          disabled={isPlaying}
        >
          <Text style={styles.buttonText}>
            {isPlaying ? "Tocando..." : "Tocar Áudio"}
          </Text>
        </TouchableOpacity>
        <ScrollView style={styles.storyContainer}>
          <Text style={styles.storyText}>{story.text}</Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
// Estilos para a interface da tela de histórias
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Fundo semitransparente
    margin: 20,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF69B4", // Rosa vibrante
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#FFA500",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FFD700", // Amarelo vibrante
  },
  button: {
    backgroundColor: "#007BFF", // Azul vibrante
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonDisabled: {
    backgroundColor: "#A9A9A9", // Cinza quando desativado
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  storyContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
    backgroundColor: "#FFF8DC", // Fundo bege claro
    borderRadius: 10,
    marginTop: 10,
  },
  storyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4B0082", // Roxo
    textAlign: "justify",
  },
});
