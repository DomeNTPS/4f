import React from 'react';
import { StyleSheet,  Button,  View,  SafeAreaView,  Text,  Alert,} from 'react-native';
import AppNavigator from './src/AppNavigator';

export default class App extends React.Component {
  render(){
  return (
    <AppNavigator/>
    
    // <View style={styles.container}>
    //   <Text>Hello !</Text>
      
    // </View>
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
