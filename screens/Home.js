import React from 'react';
import { Button } from 'react-native';

import {
    Container,
    LogoContainer,
    Logo,
    WelcomText
} from '../styles/HomeStyles';

const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <LogoContainer>
            <Logo source={require('../assets/panda-logo-poly.png')} />
            </LogoContainer>
            <WelcomText>Welcom in Panda's shop</WelcomText>
            <Button 
                title="Go shopping"
                onPress={() => navigation.navigate('Shop')}
            />
        </Container>
    );
};

export default HomeScreen;