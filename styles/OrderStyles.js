import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

    export const OrderContainer = styled.View`
        padding-top: 15px;
        width: ${deviceWidth};
        height: ${deviceHeight * 0.9};
        display: flex;
        flex-direction: row;
        background-color: white;
    `;

    export const ShippingInfo = styled.View`
        width: 270px;
        display: flex;
        align-items: center;
    `; 

    export const SubmitBtn = styled.TouchableHighlight`
        width: 150px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: blue;
        border-radius: 5px;
    `;

    export const OrderInfo = styled.View`
        padding: 5px;
        width: 120px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-left: 1px solid #bbbbbb;
    `;

    export const InputTitle = styled.Text`
        font-size: 12px;
    `;

    export const InputField = styled.TextInput`
        margin-bottom: 15px;
        padding: 6px;
        width: 235px;
        height: 30px;
        border: 1px solid;
        border-radius: 5px;
    `;

    export const StuffContainer = styled.FlatList`
        max-height: 350px;
        display: flex;
    `;

    export const BrakeLine = styled.View`
        margin-top: 10px;
        margin-bottom: 10px;
        width: 80%;
        border: 1px solid #bbbbbb;
        border-radius: 2px;
    `;

    export const EmptyCartScreen = styled.View`
        margin: 20px;
        height: 400px; 
        background-color: white; 
        display: flex; 
        justify-content: center; 
        align-items: center;
    `;

    export const PriceWrapper = styled.View`
        margin-right: 5px;
        width: 100%;
        display: flex;
        align-items: center;
    `;

    export const Price = styled.View`
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `;

    export const PriceFor = styled.Text`
        font-size: 10px;
        font-weight: bold;
    `;

    export const PriceNumber = styled.Text`
        font-size: 10px;
    `;
