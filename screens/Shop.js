import React from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import Item from '../components/Item';
import AlertPopup from '../components/AlertPopup';

import { styles } from '../styles/shopStyles';

const ShopScreen = () => {
    const [stuffs, setStuffs] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const renderItem = ({item}) => (
        <Item item={item} buyBtn/>
    )

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

    return (
        <View style={styles.container}>
            {error && (
                <AlertPopup 
                    error={error}
                    success={success}
                />
            )}
            {isLoading ? (
                <ActivityIndicator
                    style={styles.loader}
                    size="large"
                    color="blue" />
                ) : error ? (<Text>Somthing wrong</Text>) : (
                <FlatList 
                    style={styles.stuffContainer}
                    data={stuffs} 
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={item => item.id}
                />
            )}
        </View>
    );
};

export default ShopScreen;
