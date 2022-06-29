import { View, Image, Text, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';

import { deleteFromOrder, inOrder } from '../redux/ducks/stuff';

import { styles } from '../styles/shopStyles';

const item = ({item, deleteBtn, buyBtn}) => {
    const dispatch = useDispatch();
    const select = useSelector(state => state.order.clientOrder);

    return (
        <View key={item.id} style={styles.cardWrapper}>
            <View style={styles.infoWrapper}>
                <Image
                    style={styles.image}
                    source={{ 
                        uri: item.imgUrl,
                        width: 100,
                        height: 120
                    }}
                    />
                <View style={styles.cardInfo}>
                    <Text>{ item.name }</Text>
                    <View style={styles.priceColorWrapper}>
                        <Text>{ item.color }</Text>
                        <Text>${ item.price }</Text>
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
                        style={{ color: 'white', fontSize: 20 }}
                        name="cart" />
                </TouchableHighlight>
            ) : null}
        </View>
    );
};

export default item;
