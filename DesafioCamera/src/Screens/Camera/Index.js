import React, { useState } from 'react';
import { Button, View, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen() { // Você pode renomear para o nome do seu componente
  const [imagemTirada, setImagemTirada] = useState(null);

  // Função para solicitar permissão e abrir a câmera
  const tirarFoto = async () => {
    // Solicita permissão para acessar a câmera
    const permissaoResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissaoResult.granted === false) {
      Alert.alert(
        "Acesso Negado!",
        "Você precisa conceder permissão para acessar a câmera."
      );
      return;
    }

    // Abre a câmera do dispositivo
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, // Permite que o usuário edite a foto (cortar, etc.)
      aspect: [4, 3],      // Proporção da imagem
      quality: 0.5,        // Qualidade da imagem (0 a 1)
    });

    // Se o usuário não cancelou a captura
    if (!result.canceled) {
      // O URI da imagem tirada estará em result.assets[0].uri
      setImagemTirada(result.assets[0].uri);
      console.log('URI da Imagem:', result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir Câmera" onPress={tirarFoto} />
      
      {imagemTirada ? (
        <Image source={{ uri: imagemTirada }} style={styles.imagem} />
      ) : (
        <Text style={styles.texto}>Nenhuma foto tirada ainda.</Text>
      )}
    </View>
  );
}

// Estilos básicos para o exemplo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imagem: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
  texto: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  }
});