import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Item from '../components/Item';
import { clearOrder } from '../redux/ducks/stuff';

import {
    OrderContainer,
    OrderInfo,
    ShippingInfo,
    InputField,
    InputTitle,
    PriceWrapper,
    PriceFor,
    Price,
    PriceNumber,
    StuffContainer,
    BrakeLine,
    SubmitBtn,
    EmptyCartScreen
} from '../styles/OrderStyles';

const OrderScreen = () => {
    const [form, setForm] = useState({});
    const [cart, setCart] = useState([]);

    const selector = useSelector(state => state.order.clientOrder);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        setCart(selector);
    }, [selector]);

    const [prices, setPrices] = useState({
        subtotal: 0,
        shipping: 10.3,
        taxes: 2.32,
    });

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const addSubtotal = cart.reduce((accumulator, currentValue) => 
            accumulator + currentValue.price, 0);

        setPrices(prev => ({
            ...prev,
            subtotal: addSubtotal
        }));
    }, [cart]);

    useEffect(() => {
        const { subtotal, shipping, taxes } = prices;

        setTotal((subtotal + shipping + taxes).toFixed(2))
    }, [prices])

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
            <OrderContainer>
                <ShippingInfo>
                    <Text>Fill shipping info</Text>
                    <InputField
                        autoCapitalize='words'
                        name="fullName"
                        onChangeText={(text) => handlerChange('fullName', text)}
                        value={form.fullName}
                        placeholder="Your Full Name..." 
                    />
                    <InputField
                        name="phone"
                        onChange={(text) => handlerChange('phone', text)}
                        value={form.phone}
                        placeholder="Your deytime phone..." 
                        keyboardType='numeric'
                    />
                    <InputField
                        name="street"
                        onChangeText={(text) => handlerChange('street', text)}
                        value={form.street}
                        placeholder="Street" 
                    />
                    <InputField
                        name="city"
                        onChangeText={(text) => handlerChange('city', text)}
                        value={form.city}
                        placeholder="City" 
                    />
                    <InputField
                        name="country"
                        onChangeText={(text) => handlerChange('country', text)}
                        value={form.country}
                        placeholder="Country"
                    />
                    <InputField
                        name="zip"
                        onChangeText={(text) => handlerChange('zip', text)}
                        value={form.zip}
                        placeholder="ZIP" 
                    />
                    <SubmitBtn onPress={() => {
                        dispatch(clearOrder());
                        navigation.navigate('SuccessOrder');
                    }}>
                            <Text style={{ color: 'white' }}>Submit Order</Text>
                    </SubmitBtn>
                </ShippingInfo>
                <OrderInfo>
                    <StuffContainer
                        data={cart} 
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    <BrakeLine />
                    <PriceWrapper>
                        <Price>
                            <PriceFor>Subtotal</PriceFor>
                            <PriceNumber>${prices.subtotal}</PriceNumber>
                        </Price>
                        <Price>
                            <PriceFor>Shipping</PriceFor>
                            <PriceNumber>${prices.shipping}</PriceNumber>
                        </Price>
                        <Price>
                            <PriceFor>Taxes</PriceFor>
                            <PriceNumber>${prices.taxes}</PriceNumber>
                        </Price>
                        <BrakeLine/>
                        <Price>
                            <PriceFor>Total</PriceFor>
                            <PriceFor>${total}</PriceFor>
                        </Price>
                    </PriceWrapper>
                </OrderInfo>
            </OrderContainer>
        ) : (
            <EmptyCartScreen>
                <Text>Your cart is empty</Text>
                <Button title="Visit shop" onPress={() => navigation.navigate('Shop')} />
            </EmptyCartScreen>
        )  
    );
};

export default OrderScreen;
