import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";
import { ModalTokens } from '../components/modal';
import Slider from "@react-native-community/slider";
import { useState } from "react";

let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function Home() {
  function gerarToken() {
    let token = "";
    for (let i = 0, n = caracteres.length; i < qtde; i++) {
      token += caracteres.charAt(Math.floor(Math.random() * n));
    }
    configTelaModal(true);
    configTokenValue(token);
  }

  const [qtde, defineQtde] = useState(6);
  const [telaModal, configTelaModal] = useState(false);
  const [tokenValue, configTokenValue] = useState("");

  return (
    <View style={ESTILO.container}>
      <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
      <Text style={ESTILO.caracteres}>Quantas banana?</Text>
      <Text style={ESTILO.caracteres}>
        {qtde} Bananas
      </Text>
      <View style={ESTILO.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#000"
          thumbTintColor="#FF8C42"
          value={qtde}
          onValueChange={(value) => defineQtde(parseInt(value))}
        />
      </View>
    
      <Modal visible={telaModal} animationType="fade" transparent={true}>
        <ModalTokens token={tokenValue} fechar={() => configTelaModal(false)} />
      </Modal>
    </View>
  );
}

const ESTILO = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF275",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height:100,
    width: 100,
    marginBottom: 60
  },
  area: {
    marginBottom: 14,
    marginTop: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF"
  },
  caracteres: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
