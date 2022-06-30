import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        width: deviceWidth,
        height: deviceHeight * 0.9,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white'
    }, 
    shippingInfo: {
        width: 270,
        display: 'flex',
        alignItems: 'center'
    }, 
    submitBtn: {
        width: 150,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 8
    },
    orderInfo: {
        padding: 5,
        width: 120,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderColor: '#bbbbbb',
    },
    inputTitle: {
        fontSize: 12,

    },
    inputField: {
        marginBottom: 15,
        padding: 6,
        width: 235,
        height: 30,
        borderWidth: 1,
        borderRadius: 8
    },
    stuffContainer: {
        maxHeight: 350,
        display: 'flex',
    },
    brakeLine: {
        marginTop: 10,
        marginBottom: 10,
        width: '80%',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#bbbbbb'
    },
    emptyCartScreen: {
        margin: 20,
        height: 400, 
        backgroundColor: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    priceWrapper: {
        marginRight: 5,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    price: {
        marginBottom: 5,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceFor: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    priceNumber: {
        fontSize: 10,
    }
});
