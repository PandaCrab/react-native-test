import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: deviceHeight,
        display: 'flex',
        justifyContent: 'center'
    },
    stuffContainer: {
        marginLeft: 15,
        marginRight: 14,
        marginTop: 20,
        display: 'flex',
        alignContent: 'space-around',
        flexWrap: 'wrap',
    },
    loader: {
        marginTop: 25,
    },  
    cardWrapper: {
        padding: 6,
        marginBottom: 5,
        marginRight: 5,
        width: 175,
        height: 250,
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
    },
    infoWrapper: {
        height: 200,
        borderBottomWidth: 1,
        borderBottomColor: '#bbbbbb'
    }, 
    cardInfo: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
    },
    priceColorWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between'
    }, 
    price: {
        alignSelf: 'flex-end'
    },
    addToCartBtn: {
        marginTop: 5,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },  
    addToCartBtnFill: {
        marginTop: 5,
        width: 30,
        height: 30,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    deleteFromCartBtn: {
        marginTop: 5,
        width: 30,
        height: 30,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    emptyCartScreen: {
        width: '100%', 
        height: 400, 
        backgroundColor: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
    }
});
