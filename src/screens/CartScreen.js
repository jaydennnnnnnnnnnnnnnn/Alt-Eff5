import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('cart');
      if (jsonValue !== null) {
        const items = JSON.parse(jsonValue);
        setCartItems(items);
      } else {
        setCartItems({});
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cart items: ', error);
      setLoading(false);
    }
  };

  const removeProduct = async (productId) => {
    const updatedItems = { ...cartItems };
    delete updatedItems[productId];

    try {
      await AsyncStorage.setItem('cart', JSON.stringify(updatedItems));
      setCartItems(updatedItems);
    } catch (error) {
      console.error('Error removing product from cart: ', error);
    }
  };

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem('cart');
      setCartItems({});
    } catch (error) {
      console.error('Error clearing cart: ', error);
    }
  };

  // Convert cartItems object to an array of product objects
  const cartItemsArray = Object.keys(cartItems).map(key => cartItems[key]);

  // Group items by brand
  const groupedItems = cartItemsArray.reduce((acc, item) => {
    if (!acc[item.brand]) {
      acc[item.brand] = [];
    }
    acc[item.brand].push(item);
    return acc;
  }, {});

  const totalCost = cartItemsArray.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <Button title='Clear Cart' onPress={clearCart} style={styles.clearButton} />

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={Object.keys(groupedItems)}
          keyExtractor={(brand) => brand}
          renderItem={({ item: brand }) => (
            <View>
              <Text style={styles.brandHeader}>{brand}</Text>
              {groupedItems[brand].map(product => (
                <View key={product.id} style={styles.productContainer}>
                  <Image source={{ uri: product.image }} style={styles.productImage} />
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPrice}>Price: ${product.price.toFixed(2)}</Text>
                    <Text style={styles.productQuantity}>Quantity: {product.quantity}</Text>
                  </View>
                  <TouchableOpacity onPress={() => removeProduct(`${product.id}_${product.brand}`)}>
                    <Image source={require('../../assets/trash.png')} style={styles.trashIcon} />
                  </TouchableOpacity>
                </View>
              ))}
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
  brandHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
