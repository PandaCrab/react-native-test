import { View, Text, Button } from 'react-native';

const SuccessOrderScreen = ({ navigation }) => (
    <View style={{
        margin: 20,
        width: 350,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }}>
        <Text style={{ textAlign: 'center', marginBottom: 30 }}>Your order is successful. Please wait, we contact to you</Text>
        <Button title="Home" onPress={() => navigation.navigate('Home')}/>
    </View>
);

export default SuccessOrderScreen;