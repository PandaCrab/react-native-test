import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/ducks/user';

import {
    ProfileMenuContainer,
    MenuItem,
    ItemText
} from '../styles/ProfileMenuStyles';

const ProfileMenuScreen = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);

    const navigation = useNavigation();

    const onLogout = async () => {
        await AsyncStorage.removeItem('USER_TOKEN');
        dispatch(logout());

        navigation.navigate('Home');
    };

    if (!token) {
        navigation.navigate('/Login');
    }

    return (
        <ProfileMenuContainer>
            <MenuItem underlayColor="#bbbbbb" activeOpacity={1}>
                <ItemText>Profile</ItemText>
            </MenuItem>
            <MenuItem underlayColor="#bbbbbb" activeOpacity={1}>
                <ItemText>Orders</ItemText>
            </MenuItem>
            <MenuItem underlayColor="#bbbbbb" activeOpacity={1}>
                <ItemText>Liked products</ItemText>
            </MenuItem>
            <MenuItem onPress={() => onLogout()} underlayColor="#bbbbbb" activeOpacity={1}>
                <ItemText>Logout</ItemText>
            </MenuItem>
        </ProfileMenuContainer>
    )
};

export default ProfileMenuScreen;
