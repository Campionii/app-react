import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PaginaSenhas() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.header}>
                <Text style={ESTILO.title}>
                    Minhas Bananas?
                </Text>
            </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        padding: 14,
        backgroundColor: "#FFF275" // Cor amarela
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000" // Cor do texto do título
    }
});
