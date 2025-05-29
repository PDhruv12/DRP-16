import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Pin } from '../types'; // Assumes types folder is one level up from components
import InfoCard from './InfoCard';

const ListViewComponent = ({ pins }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pins}
        renderItem={({ item }) => <InfoCard pin={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  listContent: {
    paddingVertical: 8,
  },
});

export default ListViewComponent;
