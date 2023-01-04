import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';

import {
    CartIcon,
    CartWrapper
} from '../styles/CartStyles';

const Cart = () => {
    const select = useSelector(state => state.order.clientOrder);

    const navigation = useNavigation();

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
            {select.length && (
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
