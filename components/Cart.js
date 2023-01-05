import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';

import {
    CartIcon,
    CartWrapper,
    Badge
} from '../styles/CartStyles';

const Cart = () => {
    const [badge, setBadge] = useState(null);

    const select = useSelector(state => state.order.clientOrder);

    const navigation = useNavigation();

    useEffect(() => {
        if (select.length) {
            setBadge(select.length);
        }

        if (!select.length) {
            setBadge(null)
        }
    }, [select]);

    return (
        <View style={{ position: 'relative', width: 30, height: 30 }}>
            <CartWrapper onPress={() => navigation.navigate('Order')}>
                <CartIcon>
                    <Icon 
                        style={{ fontSize: 25 }}
                        name="cart"
                    />
                </CartIcon>
            </CartWrapper>
            {badge && (
                <Badge>
                    <Text style={{ color: 'white', fontSize: 10 }}>
                        { select.length }
                    </Text>
                </Badge>
            )}
        </View>
    );
};

export default Cart;
