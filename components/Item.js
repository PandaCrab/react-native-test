import { View, Image, Text, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';

import { deleteFromOrder, inOrder } from '../redux/ducks/stuff';

import { styles } from '../styles/ItemStyles';

const Item = ({item, deleteBtn, cartScreen, buyBtn}) => {
    const dispatch = useDispatch();
    const select = useSelector(state => state.order.clientOrder);

    return (
        <View key={item.id} style={cartScreen ? styles.cartCardWrapper : styles.cardWrapper}>
            <View style={cartScreen ? styles.cartInfoWrapper : styles.infoWrapper}>
                <Image
                    style={styles.image}
                    source={{ 
                        uri: item.imgUrl,
                        width: cartScreen ? 25 : 100,
                        height: cartScreen ? 40 : 120
                    }}
                    />
                <View style={cartScreen ? styles.cartCardInfo : styles.cardInfo}>
                    <Text style={cartScreen ? styles.cartItemName : styles.itemName}>{ item.name }</Text>
                    <View style={styles.priceColorWrapper}>
                        <Text style={cartScreen ? styles.cartItemText : styles.itemText}>{ item.color }</Text>
                        <Text style={cartScreen ? styles.cartItemText : styles.itemText}>${ item.price }</Text>
                    </View>                    
                </View>
            </View>
            { buyBtn ? (
                <TouchableHighlight 
                    onPress={() => {
                        dispatch(inOrder(item));
                    }}
                    activeOpacity={0.6}
                    underlayColor="#bbbbbb"
                    style={select.find(x => x.id === item.id) ?
                            styles.addToCartBtnFill :
                            styles.addToCartBtn
                        }>
                    <Icon 
                        style={{ color: select.find(x => x.id === item.id) ? 'white': 'black', fontSize: 20 }}
                        name="cart" />
                </TouchableHighlight>
            ) : deleteBtn ? (
                <TouchableHighlight 
                    onPress={() => {
                        dispatch(deleteFromOrder(item));
                    }}
                    activeOpacity={0.6}
                    underlayColor="#bbbbbb"
                    style={styles.deleteFromCartBtn}>
                    <Icon 
                        style={{ color: 'white', fontSize: 12 }}
                        name="close" />
                </TouchableHighlight>
            ) : null}
        </View>
    );
};

export default Item;
