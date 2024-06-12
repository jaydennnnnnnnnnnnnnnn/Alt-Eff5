import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    title2: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    logo: {
        marginBottom: 10,
        width: 500,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
    },
    exploreText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    scrollView: {
        marginBottom: 20,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 0,
        marginBottom: 0,
    },
    thumbnailContainer: {
        marginRight: 20,
    },
    thumbnailpic: {
        width: 150,
        height: 100,
        marginBottom: 10,
    },
    bodyText: {
        marginBottom: 10,
    },
});

export default styles;