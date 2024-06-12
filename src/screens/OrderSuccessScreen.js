import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function OrderSuccessPage({ navigation }) {
  const goToHome = () => {
    navigation.navigate('Home'); // Navigate to the home screen
  };

  const viewCart = () => {
    navigation.navigate('Cart'); // Navigate to the cart screen
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/ordersuccess.png')}/>
      <Text style={styles.message}>
        Your order has been confirmed successfully and will be received by our partners. Thank You!
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Go Back to Home" onPress={goToHome} />
        <Button title="View Cart" onPress={viewCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set background color as needed
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

