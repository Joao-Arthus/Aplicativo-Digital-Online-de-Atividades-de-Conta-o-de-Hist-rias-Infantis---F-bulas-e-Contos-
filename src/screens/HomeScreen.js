// Importação dos componentes necessários
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

// Lista de histórias
const stories = [
  {
    id: "1",
    title: "A Lebre e a Tartaruga",
    audio: require("../../assets/hare_and_tortoise.mp3"),
    image: require("../../assets/hare_and_tortoise.jpg"),
    text: `Era uma vez uma lebre muito veloz e convencida. Ela desafiou uma tartaruga lenta para uma corrida, certa de que venceria com facilidade. Durante a corrida, a lebre, confiante demais em sua rapidez, decidiu tirar uma soneca no meio do caminho. Enquanto isso, a tartaruga, lenta mas persistente, continuou seu caminho e cruzou a linha de chegada antes da lebre. Moral da história: devagar e sempre vence a corrida.`,
  },
  {
    id: "2",
    title: "Os Três Porquinhos",
    audio: require("../../assets/three_pigs.mp3"),
    image: require("../../assets/three_pigs.jpg"),
    text: `Era uma vez três porquinhos que decidiram construir suas próprias casas. O primeiro construiu uma casa de palha, o segundo uma de madeira e o terceiro, mais cuidadoso, uma de tijolos. Um lobo apareceu e soprou com força nas casas de palha e madeira, destruindo-as facilmente. Mas, quando tentou soprar a casa de tijolos, não conseguiu derrubá-la. Moral da história: trabalho duro compensa.`,
  },
  {
    id: "3",
    title: "Cinderela",
    audio: require("../../assets/cinderella.mp3"),
    image: require("../../assets/cinderella.jpg"),
    text: `Cinderela era uma jovem muito gentil e trabalhadora. Sua madrasta e suas irmãs a tratavam muito mal, mas com a ajuda de sua fada madrinha, ela foi ao baile e conquistou o coração do príncipe. Ao fugir à meia-noite, deixou para trás um sapato de cristal. O príncipe usou o sapato para encontrá-la e, ao reencontrá-la, casaram-se e viveram felizes para sempre`,
  },
  {
    id: "4",
    title: "Branca de Neve",
    audio: require("../../assets/snow_white.mp3"),
    image: require("../../assets/snow_white.jpg"),
    text: `Branca de Neve era a mais bela do reino, mas sua madrasta invejosa tentou acabar com ela. Com a ajuda de sete anões e de um príncipe, Branca de Neve superou os desafios e viveu feliz para sempre. Moral da história: a bondade e a coragem sempre triunfam sobre a inveja e a maldade.`,
  },
  {
    id: "5",
    title: "Chapeuzinho Vermelho",
    audio: require("../../assets/little_red_riding_hood.mp3"),
    image: require("../../assets/little_red_riding_hood.png"),
    text: `Chapeuzinho Vermelho foi visitar sua avó, mas encontrou o lobo no caminho. O lobo tentou enganá-la e correu para a casa da avó, disfarçando-se dela. Mas com a ajuda de um caçador, Chapeuzinho e sua avó escaparam do perigo. Moral da história: obedeça aos conselhos de quem quer o seu bem.`,
  },
  {
    id: "6",
    title: "João e Maria",
    audio: require("../../assets/hansel_and_gretel.mp3"),
    image: require("../../assets/hansel_and_gretel.jpg"),
    text: `João e Maria foram abandonados na floresta e encontraram uma casa de doces habitada por uma bruxa malvada. A bruxa tentou aprisioná-los, mas, usando sua inteligência, João e Maria conseguiram derrotá-la e voltar para casa. Moral da história: união e esperteza ajudam a superar os desafios.`,
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")} // Imagem de fundo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>🌟 Histórias Interativas 🌟</Text>
        <FlatList
          data={stories} // Dados da lista
          keyExtractor={(item) => item.id} // Chave única
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.storyItem}
              onPress={() => navigation.navigate("Story", { story: item })}
            >
              <Text style={styles.storyTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}
// Estilos para a interface da tela inicial
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF69B4", // Rosa vibrante
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#FFA500",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  storyItem: {
    padding: 20,
    backgroundColor: "#FFD700", // Amarelo vibrante
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  storyTitle: {
    fontSize: 18,
    color: "#4B0082", // Roxo vibrante
    fontWeight: "bold",
    textAlign: "center",
  },
});
