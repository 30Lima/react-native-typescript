import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Tarefa from './Tarefa';

export default function App() {
  return (
    <View style={styles.container}>
      <Tarefa concluida={false} titulo='Qualquer coisa' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
