import React from 'react';
import { View, Text, Button } from 'react-native';

const PutScreenNameHere = ({ navigation }) => {
    return (
        <View>
            <Text>BoilerText</Text>
            <Button title="Go to different Page"
                onPress={() => navigation.navigate('differentPage')}
            />

        </View>
    );
};

export default PutScreenNameHereScreen