import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import { AlertText, SuccessPopup, ErrorPopup } from '../styles/AlertPopupStyles';

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

    const fadeOut = () => {
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
        <Animated.View style={{ opacity: fade.fadeAnimation }}>
            {success ? (
                <SuccessPopup>
                        <AlertText>{success}</AlertText>
                </SuccessPopup>
            ) : (
                <ErrorPopup>
                    <AlertText>{error}</AlertText>
                </ErrorPopup>
            )}
        </Animated.View>
    );
};

export default AlertPopup;
