import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { CameraView, Camera } from "expo-camera";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddToEcoCredits = async (data, navigation) => {
  try {
    // Retrieve current EcoCredits from AsyncStorage
    let EcoCredits = await AsyncStorage.getItem('EcoCredits');
    // Parse the value as float or default to 0
    EcoCredits = parseFloat(EcoCredits) || 0;
    // Extract characters starting from the 11th character onwards and parse as float
    creditsToAdd = parseFloat(data.substring(10));
    creditsToAdd = Math.floor(creditsToAdd*5) 
    EcoCredits += creditsToAdd;
    await AsyncStorage.setItem('EcoCredits', EcoCredits.toString());
    alert(`${creditsToAdd} credits added to account. You now have ${EcoCredits} credits.` );
    navigation.navigate('Home');
  } catch (error) {
    console.error('Error adding to EcoCredits:', error);
  }
};

export default function QRCodeScanner({ navigation }) { // Receive navigation prop
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [message, setMessage] = useState('');

  const preassignedId = "3Dja295Aj";

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (data.substring(0,9) === preassignedId) {
      setMessage('ID Verified!');
      AddToEcoCredits(data, navigation); // Pass the scanned data and navigation object
    } else {
      setMessage('Invalid ID');
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan your QR code at any registered store to get 5 EcoCredits for every $1 you spend!</Text>
      <View style={styles.cameraContainer}>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
          style={styles.camera}
        />
      </View>
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const { width } = Dimensions.get('window');
const cameraSize = width * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25, 
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: "center",
    width: '80%',
  },
  cameraContainer: {
    width: cameraSize,
    height: cameraSize,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
  },
  camera: {
    width: cameraSize,
    height: cameraSize,
  },
});
