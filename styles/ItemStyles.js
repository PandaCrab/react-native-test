import styled from 'styled-components/native';

    export const cardWrapper = styled.View`
        padding: 6px;
        margin-bottom: 5px;
        margin-right: 5px;
        width: 175px;
        height: 250px;
        display: flex;
        flex-direction: column;
        background-color: white;
        border-width: 1px;
    `;

    export const cartCardWrapper = styled.View`
        padding: 2px;
        margin-bottom: 5px;
        margin-right: 3px;
        width: 100px;
        height: 100px;
        display: flex;
        flexDirection: column;
        alignItems: center;
        background-color: white;
        border: 1px solid;
    `;

    export const infoWrapper = styled.View`
        height: 200px;
        border-bottom: 1px solid #bbbbbb;
    `;

    export const cartInfoWrapper = styled.View`
        height: 75px;
        display: flex;
        flex-direction: row;
        border: 1px solid #bbbbbb;
    `; 

    export const itemName = styled.Text`
        font-size: 16px;
        font-weight: bold;
    `;

    export const cartItemName = styled`
        font-size: 9px;
        font-weight: bold;
        text-align: right;
    `;

    export const itemText = styled.Text`
        font-size: 14px;
    `;
    cartItemText: `
        fontSize: 10;
        textAlign: right;
    `;
    priceColorWrapper: `
        display: flex;
        flexDirection: column;
        justifyContent: space-between;
    `; 
    cardInfo: `
        height: 50;
        width: 100%;
        display: flex;
        alignItems: flex-start;
        justifyContent: space-between;
    `;  
    cartCardInfo: `
        height: 70;
        width: 70;
        display: flex;
        alignItems: flex-end;
        justifyContent: space-between;
    `;  
    addToCartBtn: `
        marginTop: 5;
        width: 30;
        height: 30;
        borderWidth: 1;
        borderRadius: 50;
        display: flex;
        alignItems: center;
        justifyContent: center;
    `;
    addToCartBtnFill: `
        marginTop: 5;
        width: 30;
        height: 30;
        borderRadius: 50;
        display: flex;
        alignItems: center;
        justifyContent: center;
        backgroundColor: green;
    `;
    deleteFromCartBtn: `
        marginTop: 3;
        width: 15;
        height: 15;
        borderRadius: 50;
        display: flex;
        alignItems: center;
        justifyContent: center;
        backgroundColor: red;
    `;
