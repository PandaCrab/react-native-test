import styled from 'styled-components/native';

export const CartWrapper = styled.TouchableHighlight`
    margin: auto;
    margin-right: 10px;
    display: flex;
    align-items: center;
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
    top: -5px;
    right: 2px;
`;
