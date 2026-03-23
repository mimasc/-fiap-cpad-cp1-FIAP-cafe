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
 
<View style={styles.linha}></View>

        <View style={styles.totalContainer}>
          <Text style={styles.h2}>Total:</Text>
          <Text style={styles.h2}>R$ {total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={[styles.btnFinalizar, cart.length === 0 && { opacity: 0.5 }]}
          disabled={cart.length === 0}
          onPress={() => alert('Compra finalizada com sucesso! (Simulação)')}
        >
          <Text style={styles.txtFinalizar}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3a3a3a',
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 50,
  },
  btnVoltar: {
    marginBottom: 20,
  },
  textoVoltar: {
    color: '#ff2d6f',
    fontSize: 16,
    fontWeight: 'bold',
  },
  h2: {
    color: '#ff2d6f',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  vazio: {
    color: '#cfcfcf',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  itemCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  nomeItem: {
    color: 'white',
    fontSize: 18,
  },
precoItem: {
    color: '#cfcfcf',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linha: {
    width: '100%',
    height: 2,
    backgroundColor: '#ff2d6f',
    marginVertical: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  btnFinalizar: {
    backgroundColor: '#ff2d6f',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  txtFinalizar: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
