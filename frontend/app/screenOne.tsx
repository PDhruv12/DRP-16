import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function ScreenOne() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Screen One</ThemedText>
      <ThemedText>This is placeholder content for Screen One.</ThemedText>
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
