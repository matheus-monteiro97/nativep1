// Substitua HomeScreen pelo conteúdo abaixo
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Avatar, FAB, List, Divider, Button, TextInput, Dialog, Portal } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [note, setNote] = useState('');
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get('https://api.thedogapi.com/v1/breeds')
      .then(res => setBreeds(res.data.slice(0, 10))) // só os 10 primeiros
      .catch(err => console.error(err));
  }, []);

  const handleAddNote = () => {
    setSelectedBreed({ ...selectedBreed, note });
    setNote('');
    setDialogVisible(false);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card style={styles.card}>
          <Card.Title
            title="Bem-vindo ao DogApp"
            subtitle="Veja raças de cachorros"
            left={(props) => <Avatar.Icon {...props} icon="dog" />}
          />
          <Card.Content>
            <Text>Toque em uma raça para saber mais.</Text>
          </Card.Content>
        </Card>

        <List.Section>
          <List.Subheader>Raças</List.Subheader>
          {breeds.map((breed, index) => (
            <View key={index}>
              <List.Item
                title={breed.name}
                description={breed.temperament}
                left={() => (
                  <Avatar.Image
                    size={40}
                    source={{ uri: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg` }}
                  />
                )}
                onPress={() => {
                  setSelectedBreed(breed);
                  setDialogVisible(true);
                }}
              />
              <Divider />
            </View>
          ))}
        </List.Section>
      </ScrollView>

      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
          <Dialog.Title>{selectedBreed?.name}</Dialog.Title>
          <Dialog.Content>
            <Text>{selectedBreed?.temperament}</Text>
            <TextInput
              label="Observação"
              value={note}
              onChangeText={setNote}
              multiline
              style={styles.input}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setDialogVisible(false)}>Cancelar</Button>
            <Button onPress={handleAddNote}>Salvar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1, position: 'relative', backgroundColor: '#fff' },
  scrollContent: { padding: 10 },
  card: { marginBottom: 20 },
  input: { marginTop: 10, backgroundColor: 'white' }
});
