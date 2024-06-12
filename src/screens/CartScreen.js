import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';

export default function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [paymentOption, setPaymentOption] = useState('Mastercard/Visa');
  const [rewards, setRewards] = useState([]);
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  useEffect(() => {
    fetchCartItems();
    fetchRewards();
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

  const fetchRewards = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Rewards');
      if (jsonValue !== null) {
        const rewards = JSON.parse(jsonValue);
        setRewards(rewards);
      }
    } catch (error) {
      console.error('Error fetching rewards: ', error);
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

  const cartItemsArray = Object.keys(cartItems).map(key => cartItems[key]);

  const groupedItems = cartItemsArray.reduce((acc, item) => {
    if (!acc[item.brand]) {
      acc[item.brand] = [];
    }
    acc[item.brand].push(item);
    return acc;
  }, {});

  const totalCost = cartItemsArray.reduce((total, item) => total + (item.price * item.quantity), 0);

  const voucherDiscount = selectedVoucher ? rewards.find(reward => reward.name === selectedVoucher)?.discount || 0 : 0;
  const discountedTotal = totalCost * (1 - voucherDiscount / 100);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <Button title='Clear Cart' onPress={clearCart} style={styles.clearButton} />

      <Text style={styles.paymentHeader}>Payment Option</Text>
      <RNPickerSelect
        onValueChange={(value) => setPaymentOption(value)}
        items={[
          { label: 'Mastercard/Visa', value: 'Mastercard/Visa' },
          { label: 'PayNow', value: 'PayNow' }
        ]}
        style={pickerSelectStyles}
        value={paymentOption}
      />

      <View style={styles.deliveryContainer}>
        <Image source={require('../../assets/map.png')} style={styles.mapIcon} />
        <Text style={styles.deliveryText}>Delivering to: Singapore 123456, Ang Mo Kio Ave</Text>
      </View>

      <Text style={styles.voucherHeader}>Use Voucher</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedVoucher(value)}
        items={rewards.map(reward => ({
          label: `${reward.name} - ${reward.ecoCreditsRequired} EcoCredits`,
          value: reward.name
        }))}
        style={pickerSelectStyles}
        value={selectedVoucher}
        placeholder={{ label: 'Select a Voucher', value: null }}
      />

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

      <Text style={styles.totalText}>Total: ${discountedTotal.toFixed(2)}</Text>

      <Button
        title="Place Order"
        onPress={() => {navigation.navigate('Order Success'); clearCart(); }}
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
  paymentHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  mapIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  deliveryText: {
    fontSize: 16,
  },
  voucherHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  trashIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#f0f0f0', // Gray background for iOS
    marginTop: 8,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#f0f0f0', // Gray background for Android
    marginTop: 8,
  },
};
