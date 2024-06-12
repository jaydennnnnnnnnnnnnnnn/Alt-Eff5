import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rewards from '../data/rewards.json'; // Adjust path if necessary

export default function RewardsScreen() {
  const [ecoCredits, setEcoCredits] = useState(0);
  const [messages, setMessages] = useState({}); // Stores messages for each reward

  useEffect(() => {
    const fetchEcoCredits = async () => {
      try {
        const storedCredits = await AsyncStorage.getItem('EcoCredits');
        if (storedCredits !== null) {
          setEcoCredits(parseInt(storedCredits, 10));
        } else {
          setEcoCredits(0);
        }
      } catch (error) {
        console.warn('Error fetching EcoCredits:', error);
      }
    };

    fetchEcoCredits();
  }, []);

  const redeemReward = async (reward) => {
    if (ecoCredits < reward.ecoCreditsRequired) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [reward.name]: 'Insufficient EcoCredits to redeem this reward.',
      }));
      return;
    }

    const updatedCredits = ecoCredits - reward.ecoCreditsRequired;
    setEcoCredits(updatedCredits);

    try {
      await AsyncStorage.setItem('EcoCredits', updatedCredits.toString());

      const storedRewards = await AsyncStorage.getItem('Rewards');
      const rewardsArray = storedRewards ? JSON.parse(storedRewards) : [];

      // Check if the reward is already added to AsyncStorage
      const existingRewardIndex = rewardsArray.findIndex(r => r.name === reward.name);
      if (existingRewardIndex === -1) {
        rewardsArray.push(reward);
        await AsyncStorage.setItem('Rewards', JSON.stringify(rewardsArray));
        setMessages((prevMessages) => ({
          ...prevMessages,
          [reward.name]: 'Reward redeemed successfully!',
        }));
      } else {
        setMessages((prevMessages) => ({
          ...prevMessages,
          [reward.name]: 'You have already redeemed this reward.',
        }));
      }
    } catch (error) {
      console.warn('Error redeeming reward:', error);
      setMessages((prevMessages) => ({
        ...prevMessages,
        [reward.name]: 'Error redeeming reward. Please try again.',
      }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>You have: {ecoCredits} EcoCredits</Text>
      <FlatList
        data={rewards.rewards}
        keyExtractor={(item, index) => index.toString()} // This is okay for static lists
        renderItem={({ item }) => (
          <View style={styles.rewardItem}>
            <View style={styles.rewardInfo}>
              <Text style={styles.rewardName}>{item.name}</Text>
              <Text style={styles.rewardDescription}>{item.description}</Text>
              <Text style={styles.rewardCredits}>Requires: {item.ecoCreditsRequired} EcoCredits</Text>
            </View>
            <View style={styles.redeemContainer}>
              <TouchableOpacity
                style={styles.redeemButton}
                onPress={() => redeemReward(item)}
              >
                <Text style={styles.redeemButtonText}>Redeem</Text>
              </TouchableOpacity>
              {messages[item.name] && (
                <Text style={styles.messageText}>{messages[item.name]}</Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

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
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
  },
  rewardInfo: {
    flex: 1,
    paddingRight: 16, // Add padding to create space between info and button
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
  redeemContainer: {
    alignItems: 'flex-end', // Align items to the end (right)
  },
  redeemButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
  },
  redeemButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  messageText: {
    marginTop: 8,
    fontSize: 12,
    color: 'red',
    textAlign: 'right', // Align text to the right
  },
});
