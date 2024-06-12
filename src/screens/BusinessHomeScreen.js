import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function BusinessHomeScreen({ navigation }) {
  const toQRScreen = () => {
    navigation.navigate('QRCode');
  };
  
  const toOrderScreen = () => {
    navigation.navigate('BusinessOrders');
  };

  return (
    
    <View style={styles.container}>
      <Image
          source={require('../../assets/usericon.png')}
          style={styles.profilePicture}
      />

      <Text style={styles.header}>Welcome, Business</Text>


      
      <TouchableOpacity style={styles.button} onPress={() => toQRScreen()}>
        <Text style={styles.buttonText}>Generate QR Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => toOrderScreen()}>
        <Text style={styles.buttonText}>Check Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#D1FFBD',
    marginBottom: 30,
    width: 200, // Increased width to 200 for better touch area
    height: 50, // Decreased height to 50 for a better button look
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, // Added border radius for better UI
  },
  
  buttonText: {
    fontSize: 18, // Decreased font size for better look
  },
  profilePicture: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 60,
  }
});
