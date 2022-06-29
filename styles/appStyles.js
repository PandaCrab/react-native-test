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
    header: {
        width: '100%',
        height: 90,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
    }, 
    menuText: {
        marginBottom: 20,
        color: 'white',
        fontSize: 24,
    },
    logoContainer: {
        marginTop: 50,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },
    welcomText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 18
    }, 
    cartButton: {
        marginTop: 10,
        marginRight: 15,
        width: 25,
        height: 20
    },  
    main: {
        width: '100%',
        height: deviceHeight * 0.9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    logo: {
        marginLeft: 10,
        width: 100,
        height: 100,
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
});