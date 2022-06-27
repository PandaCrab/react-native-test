import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import ShopScreen from './screens/Shop';

import { styles } from './styles/appStyles';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLogoText}>
          <Image 
            source={require('./public/panda-logo-poly.png')}
            style={styles.logo} />
          <Text style={styles.headerText}>Panda's shop</Text>
          <Image
            source={require('./public/menu-button.png')}
            style={styles.menuButton} />
        </View>
      </View>
      <View style={styles.main}> 
        <ShopScreen />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
