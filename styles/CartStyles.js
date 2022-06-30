import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cartWrapper: {
        borderRadius: 50,
        opacity: .3,
        display: 'flex',
        justifyContent: 'center',
    },
    cartButton: {
        marginTop: 10,
        marginRight: 15,
        width: 25,
        height: 20,
        borderRadius: 50,

    },
    badge: {
        width: 15, 
        height: 15, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ed574c',
        borderRadius: 50, 
        position: 'absolute',
        top: 5,
        right: 3,
    }
})