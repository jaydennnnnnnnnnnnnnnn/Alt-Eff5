import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen({ navigation }) {
  const [selectedPayment, setSelectedPayment] = useState('PayNow');
  const [cartItems, setCartItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    fetchCartItems();
  }, [refresh]);

  const fetchCartItems = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('cart');
      console.log('test cart:', jsonValue);
      if (jsonValue !== null) {
        const items = JSON.parse(jsonValue);
        console.log('Cart Items:', items);
        setCartItems(items);
        setLoading(false); // Set loading to false after fetching items
      } else {
        setCartItems([]); // Set cartItems to empty array if no items found
        setLoading(false); // Set loading to false
        console.log('Cart is empty or not set.');
      }
    } catch (error) {
      console.error('Error fetching cart items: ', error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  const removeProduct = async (productId) => {
    const updatedItems = cartItems.filter(item => item.id !== productId);
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedItems));
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error removing product from cart: ', error);
    }
  };
  
  // Convert cartItems object to an array of product objects
  const cartItemsArray = Object.values(cartItems);

  const totalCost = cartItemsArray.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <Button title='Clear Cart' onPress={() => AsyncStorage.clear()} style={styles.clearButton}/>

      {loading ? ( // Show loading indicator while fetching data
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={cartItemsArray}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>Price: ${item.price.toFixed(2)}</Text>
                <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
              </View>
              <TouchableOpacity onPress={() => removeProduct(item.id)}>
                <Image source={require('../../assets/trash.png')} style={styles.trashIcon} />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <Text style={styles.totalText}>Total: ${totalCost.toFixed(2)}</Text>

      <Button
        title="Place Order"
        onPress={() => navigation.navigate('OrderSuccess')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 16
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  productDetails: {
    marginLeft: 16,
    flex: 1,
  },
  productName: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  productQuantity: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
  },
  trashIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
