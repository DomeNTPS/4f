import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
} from 'react-native';

export default class Home extends React.Component {
    render() {
        return ( <View style = {styles.container} >
            <Text>We have no friends!</Text>
              <Button
              title = "Add some friends"
              onPress = {
                  () =>
                  this.props.navigation.navigate('Friends')
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