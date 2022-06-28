import { View, Text, Image, ActivityIndicator, FlatList, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';

import { styles } from '../styles/shopStyles';
import FadeView from '../Components/AlertPopup';

const item = ({item}) => (
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
            activeOpacity={0.6}
            underlayColor="#bbbbbb"
            style={styles.addToCartBtn}>
            <Text style={{ color: 'white' }}>x</Text>
        </TouchableHighlight>
    </View>
);

const ShopScreen = () => {
    const [stuffs, setStuffs] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const fetchData = async() => {
        try {
            const response = await fetch('http://demo3147501.mockable.io/');
            const json = await response.json();
            const data = json[0].products

            if(response.ok) {
                await setStuffs(data);
                setTimeout(() => setLoading(false), 500);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return isLoading ? (
        <ActivityIndicator
            style={styles.loader}
            size="large"
            color="blue" />
    ) : error ? (
        <FadeView 
            popup={error}
            style={styles.errorPopup}
        >
            <Text style={{ color: 'white' }}>
                {error}
            </Text>
        </FadeView>
    ) : (
        <FlatList 
            style={styles.container}
            data={stuffs} 
            renderItem={item}
            numColumns={2}
            keyExtractor={item => item.id}
        />
    );
};

export default ShopScreen;
