import React, { useState, useEffect } from 'react';
import { Animated, Text } from 'react-native';

import { styles } from '../styles/AlertPopupStyles';

const AlertPopup = ({ error, success, children }) => {
    const [fade, setFade] = useState({
        fadeAnimation: new Animated.Value(0),
        popup: {
            error: error,
            success: success
        }
    });

    const fadeIn = () => {
        Animated.timing(fade.fadeAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
        }).start();
    };

    fadeOut = () => {
        Animated.timing(fade.fadeAnimation, {
        toValue: 0,
        duration: 500,
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
            style={ success 
                ? {
                    ...styles.successPopup,
                    opacity: fade.fadeAnimation
                } : {
                    ...styles.errorPopup,
                    opacity: fade.fadeAnimation
                }}
        >
            {success ? (
                <Text style={styles.alertText}>{success}</Text>
            ) : (
                <Text style={styles.alertText}>{error}</Text>
            )}
        </Animated.View>
    );
};

export default AlertPopup;
