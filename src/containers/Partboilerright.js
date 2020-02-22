import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  Dimensions
} from "react-native";
import {
  TouchableOpacity,
  ScrollView
} from "react-native-gesture-handler";
import ImageZoom from "react-native-image-pan-zoom";
import Boilerright from "../../Image/Boiler New/Boilerright";
import ContainerTop from '../Layout/containtop';
export default class Partboilerright extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const kks1 = this.props.navigation.getParam("KKS1", "dont have value");
    return (
      <View style={styles.container}>
        <ContainerTop navigation ={this.props.navigation}>
        </ContainerTop>
        <View style={styles.containerbottom}>
           <ScrollView
            maximumZoomScale={3}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Boilerright height={400} width={400} alignSelf = 'center' />
            
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 110 ,width : 250}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerrighttop",{KKS1: kks1,KKS2:"HAD",KKS3 :"10"})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 130 ,width : 250}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerrightmid",{KKS1: kks1,KKS2:"HAD",KKS3 :"10"})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 145 ,width : 240}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerrightbottom",{KKS1: kks1,KKS2:"HAD",KKS3 :"10"})
              } >
                </ TouchableOpacity>
                </ View>
                
          </ScrollView>
        </View>
      </View>
    );
  }
}

const win = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containerbottom: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    //justifyContent: 'center',
  },
  containerbottom0: {
    borderColor: "#000",
    borderWidth: 2,
    height: 110, 
    width: 250,
    position: "absolute",
    marginTop: 10,
    marginLeft: 50,
  },
   containerbottom1: {
    borderColor: "#f00",
    borderWidth: 2,
    height: 130,
    width: 250,
    position: "absolute",
    marginTop: 123,
    marginLeft: 80,
  },
  containerbottom2: {
    height: 145,
    width: 240,
    position: "absolute",
    borderColor: '#AB6',
    borderWidth:2,
    marginTop: 255,
    marginLeft: 100,
  },
});
