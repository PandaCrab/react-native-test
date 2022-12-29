import styled from 'styled-components/native';

export const ErrorPopup = styled.View`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 0, 0, 0.6);
    border: 1px solid red;
    border-radius: 8px;
    opacity: ${({ animOpacity }) => animOpacity || 1};
    position: absolute;
    bottom: 20px;
    left: 15px;
    right: 15px;
    z-index: 1000;
`;

export const SuccessPopup = styled.View`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    border-radius: 8px;
    border: 1px solid darkgreen;
    opacity: ${({ animOpacity }) => animOpacity || 1};
    position: absolute;
    bottom: 20px;
    left: 15px;
    right: 15px;
    z-index: 1000;
`;

export const AlertText = styled.Text`
    color: white;
`;
