import * as React from 'react';
import { useFonts } from 'expo-font';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

const localImage = require('./logo.jpeg');

export default function App() {
    const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttc'),
  });

  return (
    <View style={styles.container}>
        <Text style={[styles.header, styles.fontSizeLarge]}>Welcome to EcoShopper</Text>
        <Image
          // source={{{ uri: 'https://files.libero.pe/Libero/2020/06/07/kfc-1591562357.jpg' }} }
          source={ localImage }
          style={ styles.image }
        />
        <Text style={{ color: 'purple' }}>User</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'center',
  },
  fontSizeLarge: {
    fontSize: 60,
  },
  image: { 
    width: 100,
    height: 100,
  }
});
