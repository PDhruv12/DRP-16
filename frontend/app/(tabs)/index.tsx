import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Uncommented and Marker added
// import { Link } from 'expo-router'; // Removed
// import { ThemedText } from '@/components/ThemedText'; // Removed
// import { ThemedView } from '@/components/ThemedView'; // Removed
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme() || 'light';
  const iconColor = Colors[colorScheme].text;

  // Placeholder function for hamburger menu
  const openMenu = () => {
    Alert.alert('Menu', 'Hamburger menu pressed. Implement functionality here.');
  };

  // Placeholder function for plus icon
  const addItem = () => {
    Alert.alert('Add', 'Plus icon pressed. Implement functionality here.');
  };

  return (
    <View style={styles.container}>
      {/* MapView implementation */}
      <View style={styles.mapContainer}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Example Pin" />
        </MapView>
      </View>

      <TouchableOpacity style={styles.hamburgerButton} onPress={openMenu}>
        <IconSymbol name="line.3.horizontal" size={30} color={iconColor} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.plusButton} onPress={addItem}>
        <IconSymbol name="plus" size={30} color={iconColor} />
      </TouchableOpacity>

      {/* Removed navigationButtonsContainer */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: { // Renamed from mapPlaceholder for clarity
    flex: 1,
    // Removed justifyContent, alignItems, and backgroundColor as MapView will fill this
  },
  hamburgerButton: {
    position: 'absolute',
    top: 50, // Adjust as needed for status bar height
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  plusButton: {
    position: 'absolute',
    bottom: 80, // Adjust as needed to be above tab bar or if no tab bar
    right: 20,
    padding: 10,
    backgroundColor: Colors.light.tint, // Example background
    borderRadius: 50,
    zIndex: 1,
  },
  // Removed navigationButtonsContainer, navButton, and navButtonText styles
});
