import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../Styles/Styles'


const localImage = require('../assets/logo.jpeg');
export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {

        navigation.navigate('BusinessLogin');
    };
    
    const handleLogin = () => {
        
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title1}>Welcome to EcoShopper!</Text>
            <Image source={localImage} style={styles.logo} />

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
                <Text style={styles.link}>Click here to visit Example.com</Text>
            </TouchableOpacity>


        </View>
    );
}

