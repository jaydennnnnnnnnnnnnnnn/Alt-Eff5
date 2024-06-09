import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const GroceryScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Header */}
                <Text style={styles.header}>EcoHarvest Grocery</Text>

                {/* Image */}
                <Image
                    source={require('../assets/EcoHarvest.jpeg')} // Replace with your image path
                    style={styles.image}
                />

                {/* Buttons */}

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Go to Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Select this Store</Text>
                    </TouchableOpacity>
                </View>

                {/* Paragraph */}
                <Text style={styles.paragraph}>
                    EcoHarvest Grocery offers sustainably sourced, organic products by partnering with local eco-friendly farmers, minimizing waste with recycling and bulk goods, and using energy-efficient systems to promote a healthier planet
                </Text>

                {/* Location Text */}
                <View style={styles.locationContainer}>
                    <Text style={styles.locationText}>Location</Text>
                </View>

                <Text style={styles.locationline}>
                    123 Eco Lane, Ang Mo Kio, Singapore 560123
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        width: '80%',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginRight: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    paragraph: {
        marginBottom: 20,
        textAlign: 'justify',
        width: '80%',
    },
    locationContainer: {
        alignItems: 'flex-start', // Align children to the start (left)
        width: '80%',
    },
    locationText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    locationline: {
        textDecorationLine: 'underline',
        marginBottom: 60,
    }

});

export default GroceryScreen;
