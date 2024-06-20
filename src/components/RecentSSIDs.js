// src/components/RecentSSIDs.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const RecentSSIDs = ({ ssids, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent SSIDs:</Text>
      <FlatList
        data={ssids}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
            <Button title="Select" onPress={() => onSelect(item)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default RecentSSIDs;
