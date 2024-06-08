import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { Text, View, StyleSheet, Image, SafeAreaView, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Import CheckBox correctly

const localImage = require('./logo.jpeg');

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttc'),
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" style={styles.loading} />;
  }

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', { email, password, rememberMe });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.header, styles.fontSizeLarge]}>Welcome to EcoShopper</Text>
        <Image
          // source={{ uri: 'https://files.libero.pe/Libero/2020/06/07/kfc-1591562357.jpg' }}
          source={localImage}
          style={styles.image}
        />
        <Text style={styles.subText}>User</Text>
        <View style={styles.loginBox}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
          <View style={styles.rememberMeRow}>
            <CheckBox
              value={rememberMe}
              onValueChange={setRememberMe}
              tintColors={{ true: '#fff', false: '#aaa' }}
            />
            <Text style={styles.rememberMeText}>Remember Me</Text>
            <TouchableOpacity onPress={() => alert('Forgot Password')}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#222',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#222',
  },
  header: {
    color: '#fff',
    fontFamily: 'Inter',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  fontSizeLarge: {
    fontSize: 40,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  subText: {
    color: 'purple',
    fontSize: 18,
    fontFamily: 'Inter',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  loginBox: {
    width: '100%',
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    marginTop: 30,
  },
  input: {
    height: 40,
    backgroundColor: '#444',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 15,
  },
  rememberMeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  rememberMeText: {
    color: '#fff',
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: '#4da6ff',
    marginLeft: 'auto',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#4da6ff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
