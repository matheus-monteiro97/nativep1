import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Button } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Avatar.Image size={100} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' }} />
        <Text style={styles.title}>Amante dos Cães</Text>
        <Text>Email: doglover@example.com</Text>
      <Button mode="contained" onPress={() => {}} style={styles.button}>
        Editar Perfil
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});
