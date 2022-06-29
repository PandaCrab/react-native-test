import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import ShopScreen from './screens/Shop';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';

import { styles } from './styles/appStyles';
import { store } from './redux/store';

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLogoText}>
            <Image 
              source={require('./assets/panda-logo-poly.png')}
              style={styles.logo} />
            <Text style={styles.headerText}>Panda's shop</Text>
            <TouchableHighlight style={styles.cartContainer}>
              <Text style={styles.cartButton}>
                <Icon 
                  style={{ fontSize: 25 }}
                  name="cart" />
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.main}> 
          <ShopScreen />
        </View>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};
