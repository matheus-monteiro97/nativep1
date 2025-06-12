export default function NotificationsScreen() {
  const curiosities = [
    { title: 'Cachorros sonham', description: 'Assim como humanos, cachorros também sonham durante o sono REM.' },
    { title: 'Nariz único', description: 'Cada cachorro tem uma impressão nasal única, como digitais.' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Curiosidades Caninas</Text>
      <List.Section>
        {curiosities.map((item, i) => (
          <View key={i}>
            <List.Item title={item.title} description={item.description} left={(props) => <List.Icon {...props} icon="information" />} />
            <Divider />
          </View>
        ))}
      </List.Section>
    </View>
  );
}
