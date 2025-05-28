/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapViewComponent from './components/MapView'; // Changed path
import ListViewComponent from './components/ListView'; // Changed path
import {mockPins} from './constants/mockData'; // Changed path

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type ViewMode = 'map' | 'list';

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [viewMode, setViewMode] = useState<ViewMode>('map');

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#1c1c1c' : '#fdfdfd', // Darker gray for dark, very light gray for light
  };

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'map' ? 'list' : 'map'));
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.toggleContainer}>
        <TouchableOpacity onPress={toggleViewMode} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>
            Switch to {viewMode === 'map' ? 'List' : 'Map'} View
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={backgroundStyle}>
        {viewMode === 'map' ? (
          <MapViewComponent pins={mockPins} />
        ) : (
          <ListViewComponent pins={mockPins} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  toggleContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  toggleButton: {
    backgroundColor: '#007AFF', // iOS blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  toggleButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
