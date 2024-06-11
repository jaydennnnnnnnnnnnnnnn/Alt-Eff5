import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import products from '../data/products.json'; // Import JSON file

export default function ListScreen({ route }) {
  const { category } = route.params;
  const [quantityMap, setQuantityMap] = useState({});

  const addToCart = async (item, quantity) => {
    try {
      console.log('Adding item to cart:', item);
      console.log('Quantity:', quantity);
  
      const productKey = `${item.id}_${item.brand}`;
      const existingCart = await AsyncStorage.getItem('cart');
      console.log('Existing cart:', existingCart);
  
      let updatedCart = existingCart ? JSON.parse(existingCart) : {};
      
      if (updatedCart[productKey]) {
        updatedCart[productKey].quantity += quantity;
      } else {
        updatedCart[productKey] = {
          id: item.id,
          name: item.name,
          brand: item.brand,
          price: item.price,
          quantity: quantity,
          image: item.image
        };
      }
      console.log(JSON.stringify(updatedCart));
      console.log('Updated cart:', updatedCart);
  
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      console.log('Cart updated successfully');


  
      // Show success message
      Alert.alert('Success', 'Product added to cart');

      const test = await AsyncStorage.getItem('cart');
      console.log('test cart:', test);




    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  
  // Function to handle quantity change for a specific product
  const handleQuantityChange = (productId, value) => {
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [productId]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
      <FlatList
        data={products.sustainable_products.filter((product) => product.category === category)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemContent}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.brand}>Brand: {item.brand}</Text>
                <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
                <Text style={styles.certification}>Certification: {item.certification}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleQuantityChange(item.id, Math.max(0, (quantityMap[item.id] || 0) - 1))}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.quantityInput}
                  value={(quantityMap[item.id] || 0).toString()}
                  onChangeText={(text) => handleQuantityChange(item.id, parseInt(text) || 0)}
                  keyboardType="numeric"
                />
                <TouchableOpacity onPress={() => handleQuantityChange(item.id, (quantityMap[item.id] || 0) + 1)}>
                  <Text style={[styles.quantityButton, {marginBottom: 8}]}>+</Text>
                </TouchableOpacity>
                {quantityMap[item.id] > 0 && (
                  <Button
                    title="Add to Cart"
                    onPress={() => addToCart(item, quantityMap[item.id])}
                  />
                )}
              </View>
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
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  certification: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
    fontStyle: 'italic',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  quantityContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityInput: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
  },
});
