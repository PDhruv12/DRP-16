import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Pin } from '../types'; // Assumes types folder is one level up from components

const { width, height } = Dimensions.get('window');

const MapViewComponent = ({ pins }) => {
  // In a real app, you'd use a map library like react-native-maps here
  // and render pins on the map.
  return (
    <View style={styles.container}>
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Map View Placeholder</Text>
        {pins.map(pin => (
          // This is a very basic representation.
          // In a real map, you'd use actual map markers.
          <Text key={pin.id} style={styles.pinText}>📍 {pin.title}</Text>
        ))}
      </View>

      <TouchableOpacity style={styles.hamburgerMenu}>
        <Text style={styles.iconText}>☰</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.plusButton}>
        <Text style={styles.iconText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0', // Placeholder background
  },
  mapPlaceholder: {
    width: width,
    height: height,
    backgroundColor: '#d3d3d3', // Lighter placeholder for map area
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  mapText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  pinText: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
  hamburgerMenu: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
  },
  plusButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    padding: 15,
    backgroundColor: '#1E90FF', // DodgerBlue
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  iconText: {
    fontSize: 24,
    color: '#333', // Changed from white to ensure visibility on light background
  },
});

export default MapViewComponent;
