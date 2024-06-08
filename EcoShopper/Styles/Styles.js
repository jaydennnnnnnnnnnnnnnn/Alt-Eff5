import { StyleSheet } from 'react-native';

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

export default styles;