import { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';

import Item from '../components/Item';

import { styles } from '../styles/shopStyles';

const ShoppingCartScreen = ({ navigation }) => {
    const renderItem = ({item}) => (
        <Item item={item} deleteBtn />
    );

    const [cart, setCart] = useState([]);

    const selector = useSelector(state => state.order.clientOrder);

    useEffect(() => {
        setCart(selector);
    }, [selector])

    return (
        <View style={{ width: '100%', height: 300, padding: 15 }}>
            { cart.length ? (
                <FlatList 
                    style={styles.stuffContainer}
                    data={cart} 
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            ) : (
                <View style={styles.emptyCartScreen}>
                    <Text>Your cart is empty</Text>
                    <Button title="Visit shop" onPress={() => navigation.navigate('Shop')} />
                </View>
            )}
        </View>
    );
};

export default ShoppingCartScreen;
