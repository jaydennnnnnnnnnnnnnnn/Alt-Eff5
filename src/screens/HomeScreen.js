import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [EcoCredits, setEcoCredits] = useState(0);


  const retrieveEcoCredits = async () => {
    try {
      const value = await AsyncStorage.getItem('EcoCredits');
      if (value !== null) {
        setEcoCredits(parseFloat(value));
      }
    } catch (error) {
      console.error('Error retrieving EcoCredits:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', retrieveEcoCredits);

    return unsubscribe;
  }, [navigation]);

  // Sample store locations
  const stores = [
    { name: 'Store A', location: 'Location A', coordinates: { x: '20%', y: '30%' } },
    { name: 'Store B', location: 'Location B', coordinates: { x: '50%', y: '60%' } },
    { name: 'Store C', location: 'Location C', coordinates: { x: '70%', y: '20%' } },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/usericon.png')}
          style={styles.profilePicture}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#aaa"
        />
      </View>


     <ScrollView> 
      <Text style={styles.bodyText}>You have: {EcoCredits} EcoCredits</Text>
      <Text style={styles.headerText}>Explore Now</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.navigate('List', { category: 'skincare' })} style={styles.thumbnailContainer}>
          <Image
            source={require('../../assets/Skincare.jpg')}
            style={styles.thumbnailPic}
          />
          <Text style={styles.categoryText}>Skincare</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('List', { category: 'groceries' })} style={styles.thumbnailContainer}>
          <Image
            source={require('../../assets/Groceries.jpg')}
            style={styles.thumbnailPic}
          />
          <Text style={styles.categoryText}>Groceries</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('List', { category: 'furniture' })} style={styles.thumbnailContainer}>
          
            <Image
              source={require('../../assets/Furniture.jpeg')}
              style={styles.thumbnailPic}
            />
            <Text style={styles.categoryText}>Furniture</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.headerText}>Stores Near You</Text>
        <View style={styles.mapContainer}>

          <Image
            source={require('../../assets/nearmap.png')}
            style={styles.mapImage}
          />
          {stores.map((store, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.pinpoint, { left: store.coordinates.x, top: store.coordinates.y }]}
              onPress={() => navigation.navigate('Store Info', { store })}
            >
              <Image
                source={require('../../assets/pinpoint.png')}
                style={styles.pinpointIcon}
              />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.headerText}>What's Trending</Text>
        <Image
          source={require('../../assets/whatstrending.jpg')}
          style={styles.trendingPic}
        />
        <Text style={styles.categoryText}>The Hottest New Green Grocery Store!</Text>
        <Text style={styles.bodyText}>
          In the bustling landscape of consumerism, a new player has emerged, promising not just quality groceries but also a commitment to sustainability. GreenStorage is the latest addition to the market, offering a refreshing alternative to traditional supermarkets...
        </Text>
      </ScrollView>
      
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => navigation.navigate('QRCodeScanner')}>
          <View style={styles.circle}>
            <Image
              source={require('../../assets/qr.png')}
              style={styles.circularButton}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.horizontalLine}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.circle}>
            <Image
              source={require('../../assets/cart.png')}
              style={styles.circularButton}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.horizontalLine}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
          <View style={styles.circle}>
            <Image
              source={require('../../assets/rewards.png')}
              style={styles.circularButton}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    marginBottom: 0,
    marginTop: 0,
  },
  thumbnailContainer: {
    marginRight: 20,
    marginBottom: 0,
  },
  thumbnailPic: {
    width: 350,
    height: 200,
    marginBottom: 10,
  },
  trendingPic: {
    width: '100%',
    marginBottom: 10,
  },
  bodyText: {
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 20,
    marginBottom: 10,
  },
  mapContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 300,
  },
  pinpoint: {
    position: 'absolute',
  },
  pinpointIcon: {
    width: 40,
    height: 40,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  circle: {
    alignItems: 'center',
  },
  circularButton: {
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    flex: 1,
  },
});
