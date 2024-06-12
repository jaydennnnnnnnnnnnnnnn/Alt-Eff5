import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRCodeScreen({ navigation }) {
  const [qrValue, setQrValue] = useState('');
  const [number, setNumber] = useState('');
  const UserID = '3Dja295Aj+';

  const generateQRCode = () => {
    if (number.trim() === '') {
      Alert.alert('Error', 'Please enter a number.');
      return;
    }
    setQrValue(UserID + number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>EcoHarvest QR Code</Text>
      <View style={styles.qrContainer}>
        {qrValue ? <QRCode value={qrValue} size={200} /> : null}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.currency}>S$</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter Amount Paid"
          value={number}
          onChangeText={text => setNumber(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Confirm" onPress={generateQRCode} />
        <Button title="Back to homepage" onPress={() => navigation.navigate('BusinessHome')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'justify',
    width: '60%',
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Add marginBottom for spacing
  },
  input: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  currency: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute buttons evenly
  },
});
