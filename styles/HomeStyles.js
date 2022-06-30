import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logoContainer: {
        marginTop: 50,
        marginBottom: 15,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },
    welcomText: {
        marginBottom: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 18
    },
    logo: {
        marginLeft: 10,
        width: 150,
        height: 150,
    },
});