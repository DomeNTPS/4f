import React, {useState,useEffect} from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Modal,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import ContainerTop from '../Layout/containtop';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  }
  render(){
    return(
      <View style = {styles.container}>
        <ContainerTop navigation ={this.props.navigation}>
        </ContainerTop>
      </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
      },
});