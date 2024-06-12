import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rewards from '../../rewards.json'; // Adjust path as necessary

export default function RewardsScreen() {
  const [ecoCredits, setEcoCredits] = useState(0);

  useEffect(() => {
    const fetchEcoCredits = async () => {
      try {
        const storedCredits = await AsyncStorage.getItem('EcoCredits');
        if (storedCredits !== null) {
          setEcoCredits(parseInt(storedCredits, 10));
        }
      } catch (error) {
        console.error('Error fetching EcoCredits:', error);
      }
    };

    fetchEcoCredits();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>You have: {ecoCredits} EcoCredits</Text>
      <FlatList
        data={rewards.rewards}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.rewardItem}>
            <Text style={styles.rewardName}>{item.name}</Text>
            <Text style={styles.rewardDescription}>{item.description}</Text>
            <Text style={styles.rewardCredits}>Requires: {item.ecoCreditsRequired} EcoCredits</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  rewardItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
  },
  rewardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardDescription: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
  rewardCredits: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});