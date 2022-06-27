import React, { useState, useEffect } from 'react';
import { Animated} from 'react-native';

const FadeInView = ({ popup, style, children }) => {
    const [fade, setFade] = useState({
        fadeAnimation: new Animated.Value(0),
        popup: popup
    });

    const fadeIn = () => {
        Animated.timing(fade.fadeAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
        }).start();
    };

    fadeOut = () => {
        Animated.timing(fade.fadeAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
        }).start();
    };

    useEffect(() => {
        if (fade.popup){
            fadeIn() 
        } 
        
        setTimeout(() => fadeOut(), 3000)
    }, [fade.popup]);

    return (
        <Animated.View
            style={{
                ...style,
                opacity: fade.fadeAnimation,
            }}
        >
            {children}
        </Animated.View>
    );
};

export default FadeInView;
