import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Item from '../components/Item';
import { clearOrder } from '../redux/ducks/stuff';

import { styles } from '../styles/ShoppingCartStyles';

const ShoppingCartScreen = () => {
    const [form, setForm] = useState({});
    const [cart, setCart] = useState([]);

    const selector = useSelector(state => state.order.clientOrder);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        setCart(selector);
    }, [selector]);

    const [total, setTotal] = useState({
        subtotal: 0,
        shipping: 10.3,
        taxes: 2.32,
        total: 0
    });

    useEffect(() => {
        const addSubtotal = cart.reduce((accumulator, currentValue) => 
            accumulator + currentValue.price, 0);

        setTotal({
            ...total,
            subtotal: addSubtotal
        });
    }, [cart]);

    const handlerChange = (key, value) => {        
        setForm(prev => ({
            ...prev, 
            [key]: value
        }));
    };

    const renderItem = ({item}) => (
        <Item item={item} cartScreen deleteBtn />
    );

    return (
        cart.length ? (
            <View style={styles.container}>
                <View style={styles.shippingInfo}>
                    <Text>Fill shipping info</Text>
                    <TextInput
                        autoCapitalize='words'
                        name="fullName"
                        onChangeText={(text) => handlerChange('fullName', text)}
                        value={form.fullName}
                        placeholder="Your Full Name..." 
                        style={styles.inputField} />
                    <TextInput
                        name="phone"
                        onChange={(text) => handlerChange('phone', text)}
                        value={form.phone}
                        placeholder="Your deytime phone..." 
                        keyboardType='numeric'
                        style={styles.inputField} />
                    <TextInput
                        name="street"
                        onChangeText={(text) => handlerChange('street', text)}
                        value={form.street}
                        placeholder="Street" 
                        style={styles.inputField} />
                    <TextInput
                        name="city"
                        onChangeText={(text) => handlerChange('city', text)}
                        value={form.city}
                        placeholder="City" 
                        style={styles.inputField} />
                    <TextInput
                        name="country"
                        onChangeText={(text) => handlerChange('country', text)}
                        value={form.country}
                        placeholder="" 
                        style={styles.inputField} />
                    <TextInput
                        name="zip"
                        onChangeText={(text) => handlerChange('zip', text)}
                        value={form.zip}
                        placeholder="ZIP" 
                        style={styles.inputField} />
                    <TouchableHighlight 
                        style={styles.submitBtn} 
                        onPress={() => {
                            dispatch(clearOrder());
                            navigation.navigate('SuccessOrder');
                        }}>
                            <Text style={{ color: 'white' }}>Submit Order</Text>
                        </TouchableHighlight>
                </View>
                <View style={styles.orderInfo}>
                    <FlatList 
                        style={styles.stuffContainer}
                        data={cart} 
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <View style={styles.brakeLine} />
                    <View style={styles.priceWrapper}>
                        <View style={styles.price}>
                            <Text style={styles.priceFor}>Subtotal</Text>
                            <Text style={styles.priceNumber}>${total.subtotal}</Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={styles.priceFor}>Shipping</Text>
                            <Text style={styles.priceNumber}>${total.shipping}</Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={styles.priceFor}>Taxes</Text>
                            <Text style={styles.priceNumber}>${total.taxes}</Text>
                        </View>
                        <View style={styles.brakeLine} />
                        <View style={styles.price}>
                            <Text style={styles.priceFor}>Total</Text>
                            <Text style={styles.priceFor}>${total.total}</Text>
                        </View>
                    </View>
                </View>
            </View>
        ) : (
            <View style={styles.emptyCartScreen}>
                <Text>Your cart is empty</Text>
                <Button title="Visit shop" onPress={() => navigation.navigate('Shop')} />
            </View>
        )  
    );
};

export default ShoppingCartScreen;
