import React from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Item from '../components/Item';
import AlertPopup from '../components/AlertPopup';
import { getAllProducts } from './apis/api';

import { styles } from '../styles/shopStyles';
import { storeStuff } from '../redux/ducks/stuff';

const ShopScreen = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const renderItem = ({item}) => (
        <Item item={item} buyBtn/>
    )

    const getProducts = async () => {
        const res = await getAllProducts();

        if (res) {
            setProducts(res);
            setLoading(false);
            dispatch(storeStuff(res));
        }

        if (!res) {
            setError(res.err)
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (isLoading) {
        return (
            <ActivityIndicator
                style={styles.loader}
                size="large"
                color="blue" 
            />
        );
    }

    if (error) {
        return (
            <AlertPopup error message={error} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.stuffContainer}
                data={products} 
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
};

export default ShopScreen;
