import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Você pode usar outra biblioteca de ícones
import perfilImagem from '../tela-perfil/assets/img-pessoa.jpg';

const PerfilScreen = ({ navigation }) => {
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
      <View style={{ alignItems: 'center' }}>
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

      {/* Opção do perfil */}
      <View style={styles.opcaoContainer}>
        {/* Favorito */}
        <TouchableOpacity style={styles.opcaoItem}>
          <View style={styles.opcaoContent}>
            <Ionicons name="heart-outline" size={24} color={"#9598F5"} />
            <Text style={[styles.opcaoText, { marginLeft: 20 }]}>Favoritos</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={"#303136"} />
        </TouchableOpacity>
        <View style={styles.linha} />

        {/* Notificação */}
        <TouchableOpacity style={styles.opcaoItem}>
          <View style={styles.opcaoContent}>
            <Ionicons name="notifications-outline" size={24} color={"#9598F5"} />
            <Text style={[styles.opcaoText, { marginLeft: 20 }]}>Notificações</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={"#303136"} />
        </TouchableOpacity>
        <View style={styles.linha} />

        {/* Alterar senha */}
        <TouchableOpacity style={styles.opcaoItem}>
          <View style={styles.opcaoContent}>
            <Ionicons name="lock-closed-outline" size={24} color={"#9598F5"} />
            <Text style={[styles.opcaoText, { marginLeft: 20 }]}>Alterar Senha</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={"#303136"} />
        </TouchableOpacity>
        <View style={styles.linha} />

        {/* Sair*/}
        <TouchableOpacity style={styles.opcaoItem}>
          <View style={styles.opcaoContent}>
            <Ionicons name="exit-outline" size={24} color={"#9598F5"} />
            <Text style={[styles.opcaoText, { marginLeft: 20 }]}>Sair</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={"#303136"} />
        </TouchableOpacity>
        <View style={styles.linha} />
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
    fontSize: 40,
    color: '#303136',
  },
  profileCard: {
    width: 263,
    height: 65,
    backgroundColor: 'rgba( 255, 255, 255, 0.65)',
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

  opcaoContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    borderRadius: 15,
    paddingHorizontal: 10,
    alignSelf: 'center', //centraliza horinzontalmente
    width: '100%', // Define uma largura menor que 100%
  },

  opcaoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderRadius: 10, // Borda arredondada para cada item
    marginBottom: 1, // Espaço para a linha
    paddingHorizontal: 10, // Padding interno
  },

  opcaoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  opcaoTextText: {
    fontSize: 16,
    color: '#303136',

  },

  linha: {
    height: 1,
    backgroundColor: '#2457C5',
    opacity: 0.8, // Deixa a linha mais clara
  },
});

export default PerfilScreen;
