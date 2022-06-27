import { StyleSheet } from 'react-native';

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
        height: '100%',
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