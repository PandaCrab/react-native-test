import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Item from '../components/Item';
import AlertPopup from '../components/AlertPopup';
import { getAllProducts } from './apis/api';
import { storeStuff } from '../redux/ducks/stuff';

import { ShopContainer, StuffContainer } from '../styles/shopStyles';

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
                size="large"
                color="blue"
                style={{
                    width: 100,
                    height: '100%',
                    alignSelf: 'center',
                }}
            />
        );
    }

    if (error) {
        return (
            <AlertPopup error message={error} />
        );
    }

    return (
        <ShopContainer>
            <StuffContainer
                data={products} 
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={(item) => item._id}
            />
        </ShopContainer>
    );
};

export default ShopScreen;
