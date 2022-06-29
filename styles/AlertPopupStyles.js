import { StyleSheet } from 'react-native';

export const  styles = StyleSheet.create({
    errorPopup: {
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.4)',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'red',
        position: 'absolute',
        bottom: 20,
        left: 15,
        right: 15,
        zIndex: 1000
    },
    successPopup: {
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'darkgreen',
        position: 'absolute',
        bottom: 20,
        left: 15,
        right: 15,
        zIndex: 1000
    },
    alertText: {
        color: 'white'
    }
});
