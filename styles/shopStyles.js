import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: '100%',
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
        height: 220,
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
    },
    infoWrapper: {
        height: 180,
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
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },  
});
