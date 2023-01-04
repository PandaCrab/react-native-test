import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

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

export const CartWrapper = styled.TouchableHighlight`
    display: flex;
    justify-content: center;
    border-radius: 50px;
    opacity: .3;
`;

export const CartIcon = styled.Text`
    width: 25px;
    height: 25px;
    border-radius: 50px;
    position: relative;
`;

export const Badge = styled.View`
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ed574c;
    border-radius: 50px;
    position: absolute;
    top: 5px;
    right: 3px;
`;
