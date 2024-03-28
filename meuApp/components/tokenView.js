import React from "react";
import { Text, StyleSheet, Pressable, Animated } from "react-native";
import { Ionicons } from '@expo/vector-icons/'

export function CaixaToken({ token, removerToken }) {
    const fadeAnim = React.useRef(new Animated.Value(1)).current;

    const handleRemoverToken = () => {
        // Criar uma animação de fade
        Animated.timing(
            fadeAnim,
            {
                toValue: 0, // Fade out
                duration: 300, // Duração da animação em milissegundos
                useNativeDriver: true, // Usar driver nativo para melhor desempenho
            }
        ).start(() => {
            // Executar a função removerToken após a animação
            removerToken();
        });
    };

    async function copiarToken() {
        await Clipboard.setStringAsync(token)
        alert("Token copiado para área de transferência.")
    }

    return (
        <Pressable style={ESTILOS.caixa} onLongPress={copiarToken}>

            <Text style={ESTILOS.text}>{token}</Text>

            <Pressable onPress={handleRemoverToken}>
                <Animated.View style={{ opacity: fadeAnim }}>
                    <Ionicons name="trash" size={24} color="#fff" />
                </Animated.View>
            </Pressable>

        </Pressable>
    );
}

const ESTILOS = StyleSheet.create({
    caixa: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        color: "#fff"
    }
});
