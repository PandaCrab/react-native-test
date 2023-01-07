import { useState } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { registerUser } from './apis/api';
import { registrationSchema } from '../helpers/validations';

import {
    RegFormContaier,
    Input,
    SubmitBtn,
    InputWrapper
} from '../styles/RegistrationScreenStyles';
import { useDispatch } from 'react-redux';
import { getInfo, getToken } from '../redux/ducks/user';
import Tooltip from '../components/Tooltip';

const RegistrationScreen = () => {
    const [reg, setReg] = useState({});
    const [invalid, setInvalid] = useState({
        path: null,
        isValid: false
    });

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onChangeHandler = (name, text) => {
        setReg({
            ...reg,
            [name]: text
        });

        setInvalid({
            ...invalid,
            path: {
                ...invalid.path,
                [name]: null
            }
        });
    };

    const onSubmit = async () => {
        await registrationSchema
        .validate(reg, { abortEarly: false })
        .then(async (value) => {
            if(value) {
                const newUser = await registerUser({...reg, username: reg.username.toLowerCase()});

                if (newUser && newUser.message === 'ok') {
                    dispatch(getToken(newUser.token));
                    dispatch(getInfo(newUser.info));

                    setInvalid({
                        path: null,
                        isValid: true,
                    });

                    setReg({});

                    navigation.navigate('Home');
                }

                if (newUser.duplicate) {
                    setInvalid({
                        ...invalid,
                        path: {
                            ...invalid.path,
                            email: newUser.duplicate
                        }
                    })
                }
            }
        })
        .catch((error) => {
            let validationError = {};

            error.inner.forEach((err) => {
                console.log(err)
                if (err.path) {
                    validationError[err.path] = err.message;
                }
            });

            setInvalid({
                path: validationError,
                isValid: false
            });
        });
    };

    return (
        <RegFormContaier>
            <InputWrapper>
                <Input
                    style={{ borderColor: invalid.path?.username && 'red' }}
                    label="Full name"
                    onChangeText={(text) => onChangeHandler('username', text)}
                    value={reg.username}
                    placeholder="Enter Your full name"
                />
                {invalid.path?.username && (
                    <Tooltip error message={invalid.path?.username} />
                )}
            </InputWrapper>
            <InputWrapper>
                <Input
                    style={{ borderColor: invalid.path?.password && 'red' }}
                    label="Password"
                    type="password"
                    onChangeText={(text) => onChangeHandler('password', text)}
                    value={reg.password}
                    placeholder="Enter strong password"
                />
                {invalid.path?.password && (
                    <Tooltip error message={invalid.path?.password} />
                )}
            </InputWrapper>
            <InputWrapper>
                <Input
                    style={{ borderColor: invalid.path?.phone && 'red' }}
                    label="Phone"
                    keyboardType="phone-pad"
                    onChangeText={(text) => onChangeHandler('phone', text)}
                    value={reg.phone}
                    placeholder="Enter Your phone"
                />
                {invalid.path?.phone && (
                    <Tooltip error message={invalid.path?.phone} />
                )}
            </InputWrapper>
            <InputWrapper>
                <Input
                    style={{ borderColor: invalid.path?.email && 'red' }}
                    label="Email"
                    onChangeText={(text) => onChangeHandler('email', text)}
                    value={reg.email}
                    placeholder="Enter email"
                />
                {invalid.path?.email && (
                    <Tooltip error message={invalid.path?.email} />
                )}
            </InputWrapper>
            <InputWrapper>
                <Input
                    style={{ borderColor: invalid.path?.age && 'red' }}
                    label="Age"
                    onChangeText={(text) => onChangeHandler('age', text)}
                    value={reg.age}
                    placeholder="Your age is..."
                />
                {invalid.path?.age && (
                    <Tooltip error message={invalid.path?.age} />
                )}
            </InputWrapper>
            <SubmitBtn onPress={() => onSubmit()} underlayColor="#bbbbbb" activeOpacity={1}>
                <Text>
                    Submit
                </Text>
            </SubmitBtn>
        </RegFormContaier>
    );
};

export default RegistrationScreen;
