import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { loginUser } from './apis/api';
import { getInfo, getToken } from '../redux/ducks/user';

import {
    AuthContainer,
    BtnWrapper,
    Input,
    Btn
} from '../styles/AuthScreenStyles';

const AuthScreen = ({ navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [failed, setFailed] = useState(null);

    const dispatch = useDispatch();

    const onLogin = async () => {
        try {
            const res = await loginUser({ username: username.toLowerCase(), password });

            if (res.token) {
                await AsyncStorage.setItem('USER_TOKEN', res.token);

                dispatch(getToken(res.token));
                dispatch(getInfo(res.info));

                navigation.navigate('Home')
            } else {
                setFailed(res.message);
                setPassword('');
            }

            return;
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <AuthContainer>
            <Input
                onChangeText={(text) => setUsername(text)}
                autoCorrect={false}
                placeholder="Username"
                value={username}
            />
            <Input
                onChangeText={(text) => setPassword(text)}
                autoCorrect={false}
                secureTextEntry={true}
                placeholder="Password"
                value={password}
            />
            {failed && (
                <Text style={{ color: 'red', marginBottom: 10 }}>
                    {failed}
                </Text>
            )}
            <BtnWrapper>
                <Btn
                    onPress={() => navigation.navigate('Profile Menu')}
                    title="Sign Up"
                />
                <Btn
                    onPress={() => onLogin()}
                    title="Log In"
                />
            </BtnWrapper>
        </AuthContainer>
    );
};

export default AuthScreen;
