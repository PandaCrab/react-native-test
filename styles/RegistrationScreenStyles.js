import styled from 'styled-components/native';

export const RegFormContaier = styled.View`
    margin-top: 50px;
    padding: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.TextInput`
    margin-bottom: 20px;
    padding: 6px 12px;
    width: 100%;
    border: 1px solid;
    border-radius: 5px;
`;

export const InputWrapper = styled.View`
    width: 80%;
    position: relative;
`;

export const SubmitBtn = styled.TouchableHighlight`
    padding: 6px 12px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 5px;
`;
