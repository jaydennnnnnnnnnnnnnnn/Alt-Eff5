import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { Text, View, Image, SafeAreaView, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Import CheckBox correctly
import styles from './Styles/Styles';


const localImage = require('./logo.jpeg');

const LoginScreen = ({ navigation }) => {
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
        navigation.navigate('Home');
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

export default LoginScreen
