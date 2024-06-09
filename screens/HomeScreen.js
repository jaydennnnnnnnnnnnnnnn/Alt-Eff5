import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your profile picture URL
          style={styles.profilePicture}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#aaa"
        />
      </View>
      <Text>Explore Now</Text>
      <ScrollView style={styles.body}>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/Skincare.jpg')}
              
              style={styles.thumbnailpic}
            />
            <Text>Skincare</Text>

            <Image
              source={require('../assets/Groceries.jpg')} 
              style={styles.thumbnailpic}
            />
            <Text>Groceries</Text>

            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }} // Replace with your profile picture URL
              style={styles.thumbnailpic}
            />
            <Text>Furniture</Text>
          </View>
          <View style={styles.thumbnail}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your profile picture URL
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.thumbnail}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your profile picture URL
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.thumbnail}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your profile picture URL
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.thumbnail}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your profile picture URL
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.thumbnail}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your profile picture URL
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.thumbnail}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your profile picture URL
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.thumbnail}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your profile picture URL
              style={styles.profilePicture}
            />
          </View>
        </ScrollView>

        <Text style={styles.bodyText}>This is the body content</Text>
        <Text style={styles.bodyText}>You can add more content here</Text>
        <Text style={styles.bodyText}>This is another line of content</Text>
        {/* Add more content as needed */}
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnailpic: {
    width: 150,
    height: 100,
    marginRight: 10,
  },
});
