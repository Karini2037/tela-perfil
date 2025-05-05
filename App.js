import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Você pode usar outra biblioteca de ícones
import perfilImagem from '../tela-perfil/assets/img-pessoa.jpg';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#303136" />
        </TouchableOpacity>
        <Text style={styles.title}>Perfil</Text>
        <View style={{ width: 24 }} /> {/* Espaço para alinhar o título */}
      </View>

      {/* Card de perfil */}
      <View style={{ alignItems: 'center'}}>
      <View style={styles.profileCard}>
        <View style={styles.profileImageContainer}>
          <Image
            source={perfilImagem}// Substitua pela imagem real
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.profileName}>Luana Lins</Text>
        <Ionicons name="chevron-forward" size={24} color="#000000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEEFC',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#303136',
  },
  profileCard: {
    width: 263,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  profileImageContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    flex: 1,
    marginLeft: 15,
    fontSize: 20,
    color: '#303136',
  },
});

export default ProfileScreen;
