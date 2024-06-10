import React from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/usericon.png')}
          style={styles.profilePicture} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#aaa" />
      </View>
      <Text style={styles.header}>Business Name: Green Eats Bistro</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.navigate('List', { category: 'skincare' })} style={styles.thumbnailContainer}>
          <Image
            source={require('../../assets/Skincare.jpg')}
            style={styles.thumbnailPic} />
          <Text style={styles.categoryText}>Skincare</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('List', { category: 'groceries' })} style={styles.thumbnailContainer}>
          <Image
            source={require('../../assets/Groceries.jpg')}
            style={styles.thumbnailPic} />
          <Text style={styles.categoryText}>Groceries</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('List', { category: 'furniture' })} style={styles.thumbnailContainer}>
          <Image
            source={require('../../assets/Furniture.jpeg')}
            style={styles.thumbnailPic} />
          <Text style={styles.categoryText}>Furniture</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.header}>What's Trending</Text>
      <Image
        source={require('../../assets/whatstrending.jpg')}
        style={styles.trendingPic} />
      <Text style={styles.categoryText}>The Hottest New Green Grocery Store!</Text>
      <Text style={styles.bodyText}>In the bustling landscape of consumerism, a new player has emerged, promising not just quality groceries but also a commitment to sustainability. GreenStorage is the latest addition to the market, offering a refreshing alternative to traditional supermarkets...
      </Text>

      {/* Bottom Toolbar */}
      <View style={styles.toolbar}>
        <View style={styles.circle}>
          {/* Image for Circular Button */}
          <Image
            source={require('../../assets/favourites.svg')}
            style={styles.circularButton}
          />
        </View>
        {/* Horizontal Line */}
        <View style={styles.horizontalLine}></View>
        <View style={styles.circle}>
          {/* Image for Circular Button */}
          <Image
            source={require('../../assets/cart.png')}
            style={[styles.circularButton, { resizeMode: 'contain' }]}
          />
        </View>
        {/* Horizontal Line */}
        <View style={styles.horizontalLine}></View>
        <View style={styles.circle}>
          {/* Image for Circular Button */}
          <Image
            source={require('../../assets/rewards.png')}
            style={[styles.circularButton, { resizeMode: 'contain'}]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
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
  scrollView: {
    marginBottom: 10,
    marginTop: 10,
  },
  thumbnailContainer: {
    marginRight: 20,
  },
  thumbnailPic: {
    width: 450,
    height: 300,
    marginBottom: 20,
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
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    borderWidth: 3
  },
});
