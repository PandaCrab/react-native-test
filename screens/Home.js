import React from 'react';
import { View, Image, Text, Button } from 'react-native';

import { styles } from '../styles/appStyles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
            <Image 
                source={require('../assets/panda-logo-poly.png')}
                style={styles.logo} />
            </View>
            <Text style={styles.welcomText}>Welcom in Panda's shop</Text>
            <Button 
                title="Go shopping"
                onPress={() => navigation.navigate('Shop')}
            />
        </View>
    );
};

export default HomeScreen;