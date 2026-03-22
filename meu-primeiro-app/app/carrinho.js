import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { CartContext } from '../CartContext';
import { useRouter } from 'expo-router';
 
export default function Carrinho() {
  const { cart, total } = useContext(CartContext);
  const router = useRouter();
 
  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => router.back()}>
          <Text style={styles.textoVoltar}>← Voltar</Text>
        </TouchableOpacity>
 
        <Text style={styles.h2}>Seu Carrinho</Text>
 
        {cart.length === 0 ? (
          <Text style={styles.vazio}>O carrinho está vazio.</Text>
        ) : (
          cart.map((item, index) => (
            <View key={index} style={styles.itemCart}>
              <Text style={styles.nomeItem}>{item.nome}</Text>
              <Text style={styles.precoItem}>R$ {item.preco.toFixed(2)}</Text>
            </View>
          ))
        )}
 
