import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    menuDropdown: {
        flex: 2,
        paddingTop: 60,
        paddingLeft: 25,
        width: 300,
        height: deviceHeight,
        backgroundColor: 'gray',
        position: 'absolute',
        left: 0,
    }, 
    menuText: {
        marginBottom: 20,
        color: 'white',
        fontSize: 24,
    },
    menuContainer: {
        position: 'relative',
    },
    headerLogoText: {
        marginBottom: 5,
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },
    headerText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 18
    }, 
    menuButton: {
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
        width: 40,
        height: 40,
    }
});