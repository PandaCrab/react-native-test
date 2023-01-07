import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export const ProfileMenuContainer = styled.View`
    padding: 5px;
    width: 100%;
    height: ${deviceHeight * 0.9}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: white;
`;

export const MenuItem = styled.TouchableHighlight`
    padding: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemText = styled.Text`
    font-size: 20px;
`;
