import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const deviceHeight = Dimensions.get('window').height;

export const ShopContainer = styled.View`
    width: 100%;
    height: ${ deviceHeight * 0.9 }px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StuffContainer = styled.FlatList`
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
`;
