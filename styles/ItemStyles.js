import styled from 'styled-components/native';

export const CardWrapper = styled.View`
    padding: 6px;
    margin-bottom: 5px;
    margin-right: 5px;
    width: 175px;
    height: 250px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid;
`;

export const CartCardWrapper = styled.View`
    padding: 2px;
    margin-bottom: 5px;
    margin-right: 3px;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: 1px solid;
`;

export const InfoWrapper = styled.View`
    height: 200px;
    border-bottom: 1px solid #bbbbbb;
`;

export const CartInfoWrapper = styled.View`
    height: 75px;
    display: flex;
    flex-direction: row;
    border: 1px solid #bbbbbb;
`; 

export const ItemName = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const CartItemName = styled.Text`
    font-size: 9px;
    font-weight: bold;
    text-align: right;
`;

export const ItemText = styled.Text`
    font-size: 14px;
`;

export const CartItemText = styled.Text`
    font-size: 10px;
    text-align: right;
`;

export const PriceColorWrapper = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardInfo = styled.View`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;  

export const CartCardInfo = styled.View`
    height: 70px;
    width: 70px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;  

export const AddToCartBtn = styled.TouchableHighlight`
    margin-top: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.fill ? 'green' : 'none'};
`;

export const DeleteFromCartBtn = styled.TouchableHighlight`
    margin-top: 3px;
    width: 15px;
    height: 15px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
`;
