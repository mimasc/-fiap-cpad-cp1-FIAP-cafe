import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { CartProvider } from '../CartContext';

//Componente que será utilizado é o 'BotaoFlutuanteCarrinho'. O objetivo é criar um botão fixo que redireciona o usuário para a tela de checkout.
function BotaoFlutuanteCarrinho() {
  const router = useRouter(); //Essa linha inicializa o roteador do Expo
 
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => router.push('/carrinho')}
    >
      <Ionicons name="cart" size={28} color="white" />
    </TouchableOpacity>
  );
}

//Componente principal que será utilizado é o 'Layout'. Será utilizado o 'RootLayout', que define a estrutura que se repete em todas as telas.
//O Stack gerencia a pilha de navegação.
//O '<Stack screenOptions={{ headerShown: false }} />' oculta a barra de título padrão do sistema para permitir que o sistema seja personalizado.
//O 'BotaoFlutuantecarrinho' fica fora do Stack para que ele fique fixo sobre todas as telas do app.
export default function Layout() {
  return (
    <CartProvider>
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
        <BotaoFlutuanteCarrinho />
      </View>
    </CartProvider>
  );
}
