import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Home extends React.Component {
    render() {
        return ( <View style = {styles.container} >
            <Text>We have no friends!</Text>
              <Button
              title = "Qr man"
              onPress = {
                  () =>
                  this.props.navigation.navigate('ScanScreen')
              }
              ></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});