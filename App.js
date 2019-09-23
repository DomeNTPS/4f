import React from 'react';
import { StyleSheet,  Button,  View,  SafeAreaView,  Text,  Alert,} from 'react-native';
import AppNavigator from './src/AppNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
    //<Button title='Submit' onPress{() => } />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
