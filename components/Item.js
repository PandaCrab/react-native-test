import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import StarRating from './StarRating';
import { deleteFromOrder, inOrder } from '../redux/ducks/order';
import { getUserInfo, getUserLikes } from '../screens/apis/api';
import { getInfo } from '../redux/ducks/user';

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
    BtnWrapper,
    CardBtn,
    DeleteFromCartBtn
} from '../styles/ItemStyles';


const Item = ({ item, deleteBtn, cartScreen, buyBtn }) => {
    const dispatch = useDispatch();
    const select = useSelector((state) => state.order.clientOrder);
    const user = useSelector((state) => state.user.info);

    const navigation = useNavigation();

    const takeUserInfo = async () => {
        const info = await getUserInfo(user._id);

        dispatch(getInfo(info));
    };

    const onLike = async (productId) => {
        try {
            const postLikes = await getUserLikes(user._id, productId);
console.log(postLikes.message)
            if (postLikes.message === 'like') {
                takeUserInfo();
            } else if (postLikes.message === 'unlike') {
                takeUserInfo();
            } else{ 
                console.log('oops')
            }
        } catch (err) {
            console.log(err);
        }
    };
console.log(user.likes)
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
                <BtnWrapper>
                    {user?._id && (
                        <CardBtn
                            style={{ marginRight: 5 }}
                            onPress={() => onLike(item._id)}
                            activeOpacity={1}
                            underlayColor="#bbbbbb"
                            fill={user?.likes.find((x) => x._id === item._id) ? 'red' : 'white'}
                        >
                            <Icon
                                style={{
                                    color:  user?.likes.find((x) => x._id === item._id) ? 'white' : 'black',
                                    fontSize: 20
                                }}
                                name="heart"
                            />
                        </CardBtn>
                    )}
                    <CardBtn 
                        onPress={() => {
                            dispatch(inOrder(item));
                        }}
                        activeOpacity={0.6}
                        underlayColor="#bbbbbb"
                        fill={select.find(x => x._id === item._id) ? 'green' : 'white'}
                    >
                        <Icon 
                            style={{ color: select.find(x => x._id === item._id) ? 'white': 'black', fontSize: 20 }}
                            name="shopping-cart"
                        />
                    </CardBtn>
                </BtnWrapper>
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
                        name="trash"
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
                <BtnWrapper>
                    {user?._id && (
                        <CardBtn
                            style={{ marginRight: 5 }}
                            onPress={() => onLike(item._id)}
                            activeOpacity={1}
                            underlayColor="#bbbbbb"
                            fill={user?.likes.find((x) => x._id === item._id) ? 'red' : 'white'}
                        >
                            <Icon
                                style={{
                                    color: user?.likes.find((x) => x._id === item._id) ? 'white' : 'black',
                                    fontSize: 20
                                }}
                                name="heart"
                            />
                        </CardBtn>
                    )}
                    <CardBtn 
                        onPress={() => dispatch(inOrder(item))}
                        activeOpacity={1}
                        underlayColor="#bbbbbb"
                        fill={select.find(x => x._id === item._id) ? 'green' : 'white'}
                    >
                        <Icon 
                            style={{ color: select.find(x => x._id === item._id) ? 'white': 'black', fontSize: 20 }}
                            name="shopping-cart"
                        />
                    </CardBtn>
                </BtnWrapper>
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
                        name="trash"
                    />
                </DeleteFromCartBtn>
            )}
        </CardWrapper>
    );
};

export default Item;
