import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function ScreenThree() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Screen Three</ThemedText>
      <ThemedText>This is placeholder content for Screen Three.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
