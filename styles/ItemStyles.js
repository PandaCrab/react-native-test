import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    cartCardWrapper: {
        padding: 2,
        marginBottom: 5,
        marginRight: 3,
        width: 100,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
    },
    infoWrapper: {
        height: 200,
        borderBottomWidth: 1,
        borderBottomColor: '#bbbbbb'
    },   
    cartInfoWrapper: {
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#bbbbbb'
    }, 
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartItemName: {
        fontSize: 9,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    itemText: {
        fontSize: 14,
    },
    cartItemText: {
        fontSize: 10,
        textAlign: 'right'
    },
    priceColorWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }, 
    cardInfo: {
        height: 50,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },  
    cartCardInfo: {
        height: 70,
        width: 70,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
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
    deleteFromCartBtn: {
        marginTop: 3,
        width: 15,
        height: 15,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
});
