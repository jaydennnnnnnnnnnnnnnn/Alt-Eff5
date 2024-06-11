import React from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

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

      <Text style={styles.headerText}>What's Trending</Text>
      <Image
        source={require('../../assets/whatstrending.jpg')}
        style={styles.trendingPic}
      />
      <Text style={styles.categoryText}>The Hottest New Green Grocery Store!</Text>
      <Text style={styles.bodyText}>
        In the bustling landscape of consumerism, a new player has emerged, promising not just quality groceries but also a commitment to sustainability. GreenStorage is the latest addition to the market, offering a refreshing alternative to traditional supermarkets...
      </Text>

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
        <View style={styles.circle}>
          <Image
            source={require('../../assets/rewards.png')}
            style={styles.circularButton}
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
    marginBottom: 10,
    marginTop: 10,
  },
  thumbnailContainer: {
    marginRight: 20,
  },
  thumbnailPic: {
    width: 200,
    height: 150,
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
