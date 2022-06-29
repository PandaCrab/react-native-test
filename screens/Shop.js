import { Text, ActivityIndicator, FlatList, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';

import Item from '../components/Item';

import { styles } from '../styles/shopStyles';
import AlertPopup from '../components/AlertPopup';

const ShopScreen = () => {
    const [stuffs, setStuffs] = useState([]);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const renderItem = ({item}) => (
        <Item item={item} onPress={() => setSuccess('Add to order')} />
    )

    const fetchData = async() => {
        try {
            const response = await fetch('http://demo3147501.mockable.io/');
            const json = await response.json();
            const data = json[0].products

            if(response.ok) {
                await setStuffs(data);
                setSuccess('Response is ok')
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
        <>
            {error || success && (
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
        </>
    );
};

export default ShopScreen;
