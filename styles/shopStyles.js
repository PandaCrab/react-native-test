import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: deviceHeight * 0.9,
        display: 'flex',
        justifyContent: 'center'
    },
    stuffContainer: {
        marginTop: 15,
        display: 'flex',
        alignContent: 'space-around',
        flexWrap: 'wrap',
    },
    loader: {
        marginTop: 25,
    },
    price: {
        alignSelf: 'flex-end'
    },
});
