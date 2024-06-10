import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import ListScreen from './src/screens/ListScreen';
import HomeScreen from './src/screens/HomeScreen';
import StoreInfo from './src/screens/StoreInfo';
import QRCodeScanner from './src/screens/QRCodeScanner';
import BusinessLoginScreen from './src/screens/BusinessLoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='List' component={ListScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='StoreInfo' component={StoreInfo} />
                <Stack.Screen name='QRCodeScanner' component={QRCodeScanner} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
