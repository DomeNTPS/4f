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

export default class Home extends React.Component {
  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.containertop} >
        <TouchableOpacity title = "Scan"
          onPress = {
          () => this.props.navigation.navigate("ScanScreen")
        } >
        <Image style = {
        {
          paddingRight: 20,
          paddingTop: 30,
          width: 50,
          height: 50,
          zIndex: 10000000
        }
      }
      source = {
        require("../../Image/Untitled-1.png")
      }
      /> 
      <View>
        <Text style = {
          {
            paddingRight: 15
          }
        }> Qr scan </Text> 
        </View> 
        </TouchableOpacity> 
      </View>
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
      containertop: {
        flex: 0.1,
        backgroundColor: "#fff",
        alignItems: "flex-end",
        paddingTop: 20

        //justifyContent: 'center',
      },
});