import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import { CameraView, Camera } from "expo-camera";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddToRewardCredits = async (data, navigation) => {
  try {
    // Retrieve current RewardCredits from AsyncStorage
    let rewardCredits = await AsyncStorage.getItem('RewardCredits');
    // Parse the value as float or default to 0
    rewardCredits = parseFloat(rewardCredits) || 0;
    // Extract characters starting from the 11th character onwards and parse as float
    const creditsToAdd = parseFloat(data.substring(10));
    // Add to RewardCredits
    rewardCredits += creditsToAdd;
    await AsyncStorage.setItem('RewardCredits', rewardCredits.toString());
    alert(`${creditsToAdd} credits added to account. You now have ${rewardCredits} credits.` );
    navigation.navigate('Home');
  } catch (error) {
    console.error('Error adding to RewardCredits:', error);
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
      AddToRewardCredits(data, navigation); // Pass the scanned data and navigation object
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
const cameraSize = width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
