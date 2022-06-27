import { Animated, View, Button, Text, Image, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

import { styles } from '../styles/shopStyles';
import FadeInView from '../Components/AlertPopup';

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
    console.log(stuffs)

    useEffect(() => {
        fetchData();
    }, []);

    return isLoading ? (
        <ActivityIndicator
            style={styles.loader}
            size="large"
            color="blue" />
        ) : error ? (
            <FadeInView 
                popup={error}
                style={styles.errorPopup}
            >
                <Text style={{ color: 'white' }}>
                    {error}
                </Text>
            </FadeInView>
        ) : (
            <View style={styles.container}>
                {stuffs.map(stuff => (
                <View key={stuff.id} style={styles.cardWrapper}>
                    <Image
                        style={styles.image}
                        source={{ uri: stuff.imgUrl }}
                        />
                    <View style={styles.cardInfo}>
                        <Text>{ stuff.name }</Text>                    
                        <Text>{ stuff.color }</Text>                    
                        <Text>{ stuff.price }</Text>                    
                    </View>
                </View>
            ))}
        </View>
    );
};

export default ShopScreen;
