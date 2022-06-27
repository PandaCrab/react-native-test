import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        width: '100%',
        display: 'flex',
        alignContent: 'space-around',
        flexWrap: 'wrap',
        height: '100%'
    },
    loader: {
        marginTop: 25,
    },  
    cardWrapper: {
        padding: 6,
        marginBottom: 5,
        width: 150,
        height: 200,
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
    },
    cardImage: {
        width: 150,
        height: 200,
    },  
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
        top: -15,
        left: 15,
        right: 15,
        zIndex: 1000
    }
});
