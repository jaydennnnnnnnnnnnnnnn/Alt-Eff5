import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import ListScreen from './src/screens/ListScreen';
import HomeScreen from './src/screens/HomeScreen';
import StoreInfo from './src/screens/StoreInfo';
import QRCodeScanner from './src/screens/QRCodeScanner';
import QRCodeScreen from './src/screens/QRCodeScreen';
import BusinessLoginScreen from './src/screens/BusinessLoginScreen';
import CartScreen from './src/screens/CartScreen';
import OrderSuccessScreen from './src/screens/OrderSuccessScreen';
import BusinessHomeScreen from './src/screens/BusinessHomeScreen';
import BusinessOrdersScreen from './src/screens/BusinessOrdersScreen';

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
                <Stack.Screen name='BusinessLogin' component={BusinessLoginScreen} />
                <Stack.Screen name='Cart' component={CartScreen} />
                <Stack.Screen name='OrderSuccess' component={OrderSuccessScreen} />
                <Stack.Screen name='BusinessHome' component={BusinessHomeScreen} />
                <Stack.Screen name='QRCode' component={QRCodeScreen} />
                <Stack.Screen name='BusinessOrders' component={BusinessOrdersScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
