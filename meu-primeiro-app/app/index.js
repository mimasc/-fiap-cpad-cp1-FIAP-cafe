import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../assets/logoFiap.png')}
            style={styles.logo}
            />

<View style={styles.mbox}>
    <Text style={styles.h1}>Bem Vindo ao Fiap-Café!</Text>
    <Text style={styles.h3}>Escolha a área quye deseja ver.</Text>


<Link href="/Cafes" style={styles.link}>
    <Text style={styles.linkText}>Cafés</Text>
</Link>

<Link href="/Bebidas" style={styles.link}>
    <Text style={styles.linkText}>Doces</Text>
</Link>

<Link href="/Salgados" style={styles.link}>
    <Text style={styles.linkText}>Doces</Text>
</Link>

<Link href="/Doces" style={styles.link}>
    <Text style={styles.linkText}>Doces</Text>
</Link>

<Link href="/outros" style={styles.link}>
    <Text style={styles.h2}>Outros</Text>
</Link>

</View>
    

<View style={styles.footer}>
        <Text style={styles.footerText}>
        trabalho de cross-plataform 2026{"\n"}
        2CCPG{"\n"}
        Vitor Komura RM563694{"\n"}
        Caio Castelão RM563036{"\n"}
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
h1: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
},h3: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
},h2: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
}
):}