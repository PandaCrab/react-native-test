import { View, Image, Text, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';

import { inOrder } from '../redux/ducks/stuff';

import { styles } from '../styles/shopStyles';

const item = ({item, onPress}) => {
    const dispatch = useDispatch()

    return (
        <View key={item.id} style={styles.cardWrapper}>
            <View style={styles.infoWrapper}>
                <Image
                    style={styles.image}
                    source={{ 
                        uri: item.imgUrl,
                        width: 'auto',
                        height: 100
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
            <TouchableHighlight 
                onPress={() => {
                    dispatch(inOrder(item));
                    onPress();
                }}
                activeOpacity={0.6}
                underlayColor="#bbbbbb"
                style={styles.addToCartBtn}>
                <Icon 
                    style={{ color: 'white', fontSize: 15 }}
                    name="cart" />
            </TouchableHighlight>
        </View>
    );
};

export default item;
