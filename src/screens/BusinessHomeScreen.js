import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const toQRScreen = ( navigation ) => {
  navigation.navigate('QRCode');
}

const toOrderScreen = ( navigation ) => {
    navigation.navigate('BusinessOrders');
   

}

export default function BusinessHome({ navigation }) {
    

    return (
      <View style={styles.container}>
         
        <TouchableOpacity style={styles.button} onPress={toQRScreen( navigation )}>
          <Text style={styles.buttonText}>Generate QR Code</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress}>
           <Text style={styles.buttonText} onPress={toOrderScreen( navigation )}>Check Orders</Text>
         </TouchableOpacity>
       </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gray',
    },

});

