import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const Container = styled.View`
    height: ${deviceHeight.toFixed(2)}px;
    fisplay: flex;
    flex-direction: column;
    aliggn-items: center;
    justify-content: center;
`;

export const LogoContainer = styled.View`
    margin-top: 50px;
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const WelcomText = styled.Text`
    margin-right: auto;
    margin-bottom: 40px;
    margin-left: auto;
    font-size: 18px;
`;

export const Logo = styled.Image`
    margin-left: 10px;
    width: 150px;
    height: 150px;
`;