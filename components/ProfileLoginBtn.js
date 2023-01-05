import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableHighlight, Text} from 'react-native';
import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { getInfo, getToken } from '../redux/ducks/user';
import { getUserInfo } from '../screens/apis/api';

import { IconWrapper, PhotoWrapper } from '../styles/ProfileLoginBtnStyles';

const ProfileLoginBtn = () => {
    const [token, setToken] = useState(null);
    const [loggedIn, setLoggedIn] = useState(null);
    const [photo, setPhoto] = useState();

    const user = useSelector((state) => state.user);
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const takeInfo = async (id) => {
        try {
            const res = await getUserInfo(id);

            if (res) {
                dispatch(getInfo(res));
            }
        } catch (err) {
            console.log(err);
        }
    };

    const tokenFromStorage = async () => {
        try {
            if (!user.token && !user.info) {
                const userToken = await AsyncStorage.getItem('USER_TOKEN');

                if (userToken != null) {
                    const info = await takeInfo(userToken);
                    setToken(userToken);

                    dispatch(getToken(userToken));
                    if (info) {
                    setPhoto(info?.photo);
                    
                    dispatch(getInfo(info));
                    }
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setPhoto(user.info?.photo);
    }, [user.info]);

    useEffect(() => {
        if (token) {
            takeInfo(token);
        } else {
            return
        }
    }, []);

    useEffect(() => {
        tokenFromStorage();
    }, []);

    useEffect(() => {
        if (user.token) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false)
        }
    }, [user]);

    return (
        <Text>
            {loggedIn ? (
                <TouchableHighlight>
                    <PhotoWrapper>
                        {photo ? (
                            <Image
                                source={{
                                    uri: photo,
                                }}
                                style={{
                                    width: undefined,
                                    height: undefined,
                                    flex: 1,
                                    alignSelf: 'stretch',
                                }}
                                resizeMode="center"
                            />
                        ) : (
                            <Text>
                                <Icon
                                    style={{ fontSize: 26 }}
                                    name="user"
                                />
                            </Text>
                        )}
                    </PhotoWrapper>
                </TouchableHighlight>
            ) : (
                <TouchableHighlight onPress={() => navigation.navigate('Login')}>
                    <IconWrapper>
                        <Icon 
                            style={{ color: 'black', fontSize: 16 }}
                            name='login'
                        />
                    </IconWrapper>
                </TouchableHighlight>
            )}
        </Text>
    );
};

export default ProfileLoginBtn;
