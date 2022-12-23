import styled from 'styled-components/native';

export const ErrorPopup = styled.View`
    height: 40px;
    display: flex;
    justifyContent: center;
    alignItems: center;
    backgroundColor: rgba(255; 0; 0; 0.6);
    borderRadius: 8px;
    borderWidth: 1px;
    borderColor: red;
    opacity: ${({ animOpacity }) => animOpacity || 1};
    position: absolute;
    bottom: 20px;
    left: 15px;
    right: 15px;
    zIndex: 1000;
`;

export const SuccessPopup = styled.View`
    height: 40px;
    display: flex;
    justifyContent: center;
    alignItems: center;
    backgroundColor: green;
    borderRadius: 8px;
    borderWidth: 1px;
    borderColor: darkgreen;
    opacity: ${({ animOpacity }) => animOpacity || 1};
    position: absolute;
    bottom: 20px;
    left: 15px;
    right: 15px;
    zIndex: 1000;
`;

export const AlertText = styled.Text`
    color: white;
`;
