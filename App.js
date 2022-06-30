import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { View, Text,TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import HomeScreen from './screens/Home';
import ShopScreen from './screens/Shop';
import ShoppingCartScreen from './screens/ShoppingCart';
import SuccessOrderScreen from './screens/SuccessOrderScreen';
import { store } from './redux/store';

import { styles } from './styles/CartStyles';

const Cart = () => {
  const select = useSelector(state => state.order.clientOrder);

  const navigation = useNavigation();

  return (
    <View style={{ position: 'relative', width: 30, height: 30 }}>
      <TouchableHighlight style={styles.cartWrapper} onPress={() => navigation.navigate('ShoppingCart')}>
        <Text style={styles.cartButton}>
          <Icon 
            style={{ fontSize: 25 }}
            name="cart" />
        </Text>
      </TouchableHighlight>
        {select.length ? (
          <View style={styles.badge}>
              <Text style={{ color: 'white', fontSize: 10 }}>
                { select.length }
              </Text>
          </View>
        ) : null}
    </View>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center', headerRight: Cart }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Shop" component={ShopScreen} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
          <Stack.Screen name="SuccessOrder" component={SuccessOrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
