import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import products from '../data/products.json';  // Import JSON file

export default function ListScreen({ route }) {
  const { category } = route.params;

  // Filter products based on the category
  const filteredProducts = products.sustainable_products.filter(
    product => product.category === category
  );  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
      <FlatList
      data={filteredProducts}
      keyExtractor={item => item.id}
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
});
