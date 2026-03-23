import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
 
export default function Index() {
    return (
    <ScrollView style={styles.container}>
      {/* A imagem logoFiap.png precisa estar dentro da pasta 'assets' do seu projeto */}
    <Image
        source={require('../assets/logoFiap.png')}
        style={styles.logo}
    />
 
    <View style={styles.box}>
        <Text style={styles.h1}>Bem-vindo ao Fiap-Café!</Text>
        <Text style={styles.h3}>Escolha a área que deseja ver.</Text>
   
        {/* O componente Link do Expo substitui a tag <a> do HTML */}
        <Link href="/cafes" style={styles.link}>
    <Text style={styles.h2}>Cafés</Text>
        </Link>
        <Link href="/bebidas" style={styles.link}>
    <Text style={styles.h2}>Bebidas</Text>
        </Link>
        <Link href="/salgados" style={styles.link}>
    <Text style={styles.h2}>Salgados</Text>
        </Link>
        <Link href="/doces" style={styles.link}>
    <Text style={styles.h2}>Doces</Text>
        </Link>
        <Link href="/outros" style={styles.link}>
    <Text style={styles.h2}>Outros</Text>
        </Link>
    </View>
 
    <View style={styles.footer}>
        <Text style={styles.footerText}>
    Trabalho de cross-plataform 2026{"\n"}
    2CCPG{"\n"}
    Vitor Komura RM563694{"\n"}
    Caio Castelão RM563630{"\n"}
    Mirella Mascarenhas RM562092{"\n"}
    Guilherme Tamai RM563276{"\n"}
    André Gouveia RM564219{"\n"}
    André Nobrega RM561754
        </Text>
    </View>
    </ScrollView>
);
}
 
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'rgb(43, 42, 42)',
    paddingHorizontal: 20,
},
logo: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
    marginVertical: 40,
},
box: {
    backgroundColor: 'rgb(237, 20, 91)',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 450,
},
h1: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
},
h3: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
},
h2: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
},
link: {
    marginVertical: 10, // Dá um respiro entre os botões de link
},
footer: {
    paddingVertical: 60,
    alignItems: 'center',
},
footerText: {
    color: 'rgba(255, 255, 255, 0.367)',
    textAlign: 'center',
    lineHeight: 22, // Melhora a leitura dos nomes da equipe
},
});
