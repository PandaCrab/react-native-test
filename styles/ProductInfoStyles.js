import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px;
    width: 100%;
`;

export const Wrapper = styled.View`
    padding: 10px 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
`;

export const InfoWrapper = styled.View`
    width: 60%;
    display: flex;
    align-items: center;
`;

export const ProductImage = styled.Image`
    margin-right: 20px;
`;

export const Row = styled.View`
    padding: 5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BoldText = styled.Text`
    font-weight: bold;
`;

export const BuyBtn = styled.TouchableOpacity`
    padding: 6px 12px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: none;
    color: black;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
`;

export const ProductDescription = styled.Text`
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
`;
