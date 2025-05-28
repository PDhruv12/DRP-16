import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function ScreenFour() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Screen Four</ThemedText>
      <ThemedText>This is placeholder content for Screen Four.</ThemedText>
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
