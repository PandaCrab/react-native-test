import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { deleteFromOrder, inOrder } from '../redux/ducks/stuff';

import { 
    CardWrapper,
    CartCardWrapper,
    InfoWrapper,
    CartInfoWrapper,
    ItemName,
    CartItemName,
    ItemText,
    CartItemText,
    PriceColorWrapper,
    CardInfo,
    CartCardInfo,
    AddToCartBtn,
    DeleteFromCartBtn
} from '../styles/ItemStyles';
import StarRating from './StarRating';

const Item = ({ item, deleteBtn, cartScreen, buyBtn }) => {
    const dispatch = useDispatch();
    const select = useSelector(state => state.order.clientOrder);

    const navigation = useNavigation();

    return cartScreen ? (
        <CartCardWrapper key={item._rid}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Product', { productId: item._id })}>
                <CartInfoWrapper>
                    <Image
                        source={{ 
                            uri: item.imgUrl,
                            width: cartScreen ? 25 : 100,
                            height: cartScreen ? 40 : 120
                        }}
                    />
                    <CartCardInfo>
                        <CartItemName s>{ item.name }</CartItemName>
                        <PriceColorWrapper>
                            <CartItemText>{ item.color }</CartItemText>
                            <CartItemText>${ item.price }</CartItemText>
                        </PriceColorWrapper>                    
                    </CartCardInfo>
                </CartInfoWrapper>
            </TouchableWithoutFeedback>
            { buyBtn ? (
                <AddToCartBtn 
                    onPress={() => {
                        dispatch(inOrder(item));
                    }}
                    activeOpacity={0.6}
                    underlayColor="#bbbbbb"
                    fill={select.find(x => x._id === item._id)}
                >
                    <Icon 
                        style={{ color: select.find(x => x._id === item._id) ? 'white': 'black', fontSize: 20 }}
                        name="cart"
                    />
                </AddToCartBtn>
            ) : deleteBtn && (
                <DeleteFromCartBtn 
                    onPress={() => {
                        dispatch(deleteFromOrder(item));
                    }}
                    activeOpacity={0.6}
                    underlayColor="#bbbbbb"
                >
                    <Icon 
                        style={{ color: 'white', fontSize: 12 }}
                        name="close"
                    />
                </DeleteFromCartBtn>
            )}
        </CartCardWrapper>
    ) : (
        <CardWrapper key={item._id}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Product', { productId: item._id })}>
                <InfoWrapper>
                    <Image
                        source={{ 
                            uri: item.imgUrl,
                            width: cartScreen ? 25 : 100,
                            height: cartScreen ? 40 : 120
                        }}
                    />
                    <CardInfo>
                        <ItemName>{ item.name }</ItemName>
                        <PriceColorWrapper>
                            <ItemText>{ item.color }</ItemText>
                            <ItemText>${ item.price }</ItemText>
                            <StarRating product={item} />
                        </PriceColorWrapper>                    
                    </CardInfo>
                </InfoWrapper>
            </TouchableWithoutFeedback>
            { buyBtn ? (
                <AddToCartBtn 
                    onPress={() => dispatch(inOrder(item))}
                    activeOpacity={0.6}
                    underlayColor="#bbbbbb"
                    fill={select.find(x => x._id === item._id)}
                >
                    <Icon 
                        style={{ color: select.find(x => x._id === item._id) ? 'white': 'black', fontSize: 20 }}
                        name="cart"
                    />
                </AddToCartBtn>
            ) : deleteBtn && (
                <DeleteFromCartBtn 
                    onPress={() => {
                        dispatch(deleteFromOrder(item));
                    }}
                    activeOpacity={0.6}
                    underlayColor="#bbbbbb"
                >
                    <Icon 
                        style={{ color: 'white', fontSize: 12 }}
                        name="close"
                    />
                </DeleteFromCartBtn>
            )}
        </CardWrapper>
    );
};

export default Item;
