import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { CartContext } from '../CartContext';
 
export default function Cafes() {
    const { addToCart } = useContext(CartContext);
  return (
    <ScrollView style={styles.body}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logoFiap.png')}
          style={styles.logo}
        />
      </View>
 
      {/* Main Container */}
      <View style={styles.container}>
        <Text style={styles.h2}>Cafés quentes</Text>
 
        {/* Tabela de Tamanhos */}
        <View style={styles.tamanhos}>
          <Text style={styles.colunaNome}></Text>
          <Text style={styles.colunaPrecoTamanho}>P</Text>
          <Text style={styles.colunaPrecoTamanho}>M</Text>
          <Text style={styles.colunaPrecoTamanho}>G</Text>
        </View>
 
        {/* Itens do Menu */}
        <View style={styles.item}>
          <Text style={styles.colunaNome}>Espresso</Text>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Espresso (P)', preco: 4 })}>
             <Text style={styles.colunaPreco}>R$ 4  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Espresso (M)', preco: 5 })}>
             <Text style={styles.colunaPreco}>R$ 5  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Espresso (G)', preco: 6 })}>
             <Text style={styles.colunaPreco}>R$ 6</Text>
          </TouchableOpacity>
        </View>
 
        <View style={styles.item}>
          <Text style={styles.colunaNome}>Americano</Text>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Americano (P)', preco: 5 })}>
             <Text style={styles.colunaPreco}>R$ 5  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Americano (M)', preco: 6 })}>
             <Text style={styles.colunaPreco}>R$ 6  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Americano (G)', preco: 7 })}>
             <Text style={styles.colunaPreco}>R$ 7</Text>
          </TouchableOpacity>
        </View>
 
        <View style={styles.item}>
          <Text style={styles.colunaNome}>Latte</Text>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Latte (P)', preco: 6 })}>
             <Text style={styles.colunaPreco}>R$ 6  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Latte (M)', preco: 7 })}>
             <Text style={styles.colunaPreco}>R$ 7  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Latte (G)', preco: 8 })}>
             <Text style={styles.colunaPreco}>R$ 8</Text>
          </TouchableOpacity>
        </View>
 
        <View style={styles.item}>
          <Text style={styles.colunaNome}>Moca</Text>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Moca (P)', preco: 6 })}>
             <Text style={styles.colunaPreco}>R$ 6  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Moca (M)', preco: 7 })}>
             <Text style={styles.colunaPreco}>R$ 7  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Moca (G)', preco: 8 })}>
             <Text style={styles.colunaPreco}>R$ 8</Text>
          </TouchableOpacity>
        </View>
 
        <View style={styles.item}>
          <Text style={styles.colunaNome}>Chá de erva-doce</Text>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Chá de erva-doce (P)', preco: 4 })}>
             <Text style={styles.colunaPreco}>R$ 4  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Chá de erva-doce (M)', preco: 5 })}>
             <Text style={styles.colunaPreco}>R$ 5  </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Chá de erva-doce (G)', preco: 6 })}>
             <Text style={styles.colunaPreco}>R$ 6</Text>
          </TouchableOpacity>
        </View>
 
        {/* Seção Café de infusão */}
        <Text style={[styles.h2, styles.secao]}>Café de infusão</Text>
        <Text style={styles.descricao}>
          Café passado com água quente, derramado diretamente no gelo.
        </Text>
 
        {/* Seção Extras */}
        <Text style={[styles.h2, styles.secao]}>Extras</Text>
 
        <View style={styles.extra}>
          <Text style={styles.colunaNome}>Chantilly</Text>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Extra: Chantilly', preco: 3 })}>
            <Text style={styles.extraPreco}>R$ 3</Text>
          </TouchableOpacity>
        </View>
 
        <View style={styles.extra}>
          <Text style={styles.colunaNome}>Calda com sabor</Text>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Extra: Calda com sabor', preco: 2 })}>
            <Text style={styles.extraPreco}>R$ 2</Text>
          </TouchableOpacity>
        </View>
 
        <View style={styles.extra}>
          <Text style={styles.colunaNome}>Leite de soja</Text>
          <TouchableOpacity onPress={() => addToCart({ nome: 'Extra: Leite de soja', preco: 4 })}>
            <Text style={styles.extraPreco}>R$ 4</Text>
          </TouchableOpacity>
        </View>
 
      {/* Footer */}
      <View style={styles.footer}>
        <Image
          source={require('../assets/logoFiap.png')}
          style={styles.logo}
        />
        <View style={styles.linha}></View>
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3a3a3a',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  logo: {
    height: 150,
    resizeMode: 'contain',
  },
  container: {
    width: '90%', 
    alignSelf: 'center',
  },
  h2: {
    color: '#ff2d6f',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
  },
  tamanhos: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ff2d6f',
    alignItems: 'center',
  },
  colunaNome: {
    flex: 2,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  colunaPrecoTamanho: {
    flex: 1,
    color: '#cfcfcf',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  colunaPreco: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  secao: {
    marginTop: 60,
  },
  descricao: {
    color: '#cfcfcf',
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
  },
  extra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ff2d6f',
  },
  extraPreco: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 80,
    paddingBottom: 40,
  },
  linha: {
    width: '60%',
    height: 2,
    backgroundColor: '#ff2d6f',
    marginTop: 20,
  },
});
 
