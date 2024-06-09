import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ListScreen from './screens/ListScreen.js';
import HomeScreen from './screens/HomeScreen';
import StoreInfo from './screens/StoreInfo';
import QRCodeScanner from './screens/QRCodeScanner';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='List' component={ListScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name= 'StoreInfo'component={StoreInfo} />
        
                <Stack.Screen name= 'QRCodeScanner'component={QRCodeScanner} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
