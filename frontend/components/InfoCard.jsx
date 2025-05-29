import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pin } from '../types'; // Assumes types folder is one level up from components


const InfoCard = ({ pin }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{pin.title}</Text>
      <Text style={styles.description}>{pin.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default InfoCard;
