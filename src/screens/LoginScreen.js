import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home'); // Navigate to HomeScreen
    };

    const handlePress = () => {
        navigation.navigate('BusinessLogin');
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title1}>Welcome to EcoShopper!</Text>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title2}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.link}>I am a Business</Text>
            </TouchableOpacity>
        </View>
    );
}
