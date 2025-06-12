import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Avatar, FAB, List, Divider, Button, TextInput, Dialog, Portal } from 'react-native-paper';

export default function HomeScreen() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [itemTitle, setItemTitle] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [items, setItems] = useState([
    { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1' },
    { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2' },
  ]);

  const addItem = () => {
    setItems([...items, { id: items.length + 1, title: itemTitle, description: itemDescription }]);
    setItemTitle('');
    setItemDescription('');
    setDialogVisible(false);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Card style={styles.card}>
          <Card.Title title="Bem-vindo" subtitle="Explore os componentes" left={(props) => <Avatar.Icon {...props} icon="home" />} />
          <Card.Content>
            <Text>Este é um exemplo de tela inicial com diversos componentes que podem ser reutilizados.</Text>
          </Card.Content>
          <Card.Actions>
            <Button icon={isFavorite ? 'heart' : 'heart-outline'} onPress={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? 'Favorito' : 'Adicionar aos Favoritos'}
            </Button>
          </Card.Actions>
        </Card>

        <List.Section>
          <List.Subheader>Lista de Tarefas</List.Subheader>
          {items.map((item) => (
            <View key={item.id}>
              <List.Item title={item.title} description={item.description} left={(props) => <List.Icon {...props} icon="folder" />} />
              <Divider />
            </View>
          ))}
        </List.Section>

      </ScrollView>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => setDialogVisible(true)}
        label="Adicionar"
      />

      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
          <Dialog.Title>Adicionar Nova Tarefa</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Título"
              value={itemTitle}
              onChangeText={setItemTitle}
              style={styles.input}
            />
            <TextInput
              label="Descrição"
              value={itemDescription}
              onChangeText={setItemDescription}
              style={styles.input}
              multiline
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setDialogVisible(false)}>Cancelar</Button>
            <Button onPress={addItem}>Salvar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 10,
  },
  card: {
    marginBottom: 20,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
});
