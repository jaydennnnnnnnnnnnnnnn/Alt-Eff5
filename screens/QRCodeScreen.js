import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [qrValue, setQrValue] = useState('');
  const UserID = '3Dja295Aj';

  useEffect(() => {
    generateQRCode();
  }, []);

  const generateQRCode = () => {
    setQrValue(UserID);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please scan this QR code at the register to redeem RewardCredits!</Text> 
      {qrValue ? <QRCode value={qrValue} size={200} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color of the container
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'justify',
    width: '60%',
    
  },
});
