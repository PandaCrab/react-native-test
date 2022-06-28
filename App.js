import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import ShopScreen from './screens/Shop';

import { styles } from './styles/appStyles';

export default function App() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLogoText}>
          <Image 
            source={require('./public/panda-logo-poly.png')}
            style={styles.logo} />
          <Text style={styles.headerText}>Panda's shop</Text>
          <TouchableHighlight onPress={() => setDropdown(!dropdown)} style={styles.manuContainer}>
              <Image
                source={require('./public/menu-button.png')}
                style={styles.menuButton} />
          </TouchableHighlight>
        </View>
      </View>
      { dropdown && ( 
        <View style={styles.menuDropdown}>
          <Text style={styles.menuText}>Element1</Text>
          <Text style={styles.menuText}>Element2</Text>
          <Text style={styles.menuText}>Element3</Text>
          <Text style={styles.menuText}>Element4</Text>
        </View>
      )}
      <View style={styles.main}> 
        <ShopScreen />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
