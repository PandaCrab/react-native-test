import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const deviceWidth = Dimensions.get('window').width;

export const AuthContainer = styled.View`
    margin-top: 50px;
    padding: 0 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
`;

export const Input = styled.TextInput`
    margin-bottom: 20px;
    padding: 6px 12px;
    width: 80%;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    background-color: white;
`;

export const BtnWrapper = styled.View`
    width: 100%;
    display: flex;
    flex-direction: ${deviceWidth < 320 ? 'column' : 'row'};
    align-items: center;
    justify-content: center;
`;

export const Btn = styled.TouchableHighlight`
    padding: 6px 12px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 5px;
`;
