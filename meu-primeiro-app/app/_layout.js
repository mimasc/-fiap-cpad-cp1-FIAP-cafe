import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { CartProvider } from './CartContext';

function BotaoFlutuanteCarrinho() {
  const router = useRouter(); 
 
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => router.push('/carrinho')}
    >
      <Ionicons name="cart" size={28} color="white" />
    </TouchableOpacity>
  );
}
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

const styles = StyleSheet.create({
  fab: {
    position: 'absolute', 
    bottom: 30,
    right: 20,
    backgroundColor: '#ff2d6f', 
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }
});
