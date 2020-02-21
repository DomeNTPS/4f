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
import Boilerbottom from "../../Image/Boiler New/Boilerbottom.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilerbottom extends React.Component {
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
            <Boilerbottom height={300} width={win.width} alignSelf = 'center' />
            
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 60 ,width : 160}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerbottomleft",{KKS1: kks1,KKS2:"LAB",KKS3 :"10"})
              } >
                </ TouchableOpacity>
                </View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 50 ,width : 180}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerbottomcenter",{KKS1: kks1,KKS2:"LAB",KKS3 :"10"})
              } >
                </TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 97 ,width : 75}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerbottomright",{KKS1: kks1,KKS2:"HAC",KKS3 :"10"})
              } >
                </ TouchableOpacity>
                </ View>
                <Text> {kks1} </Text>
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
    height: "10%", 
    width: "50%",
    position: "absolute",
    marginTop: "35%",
    marginLeft: 0,
  },
   containerbottom1: {
    borderColor: "#f00",
    borderWidth: 2,
    height: 90,
    width: 180,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 175,
    marginLeft: 210,
  },
  containerbottom2: {
    height: 85,
    width: 80,
    // alignSelf: "flex-end",
    position: "absolute",
    borderColor: '#AB6',
    borderWidth: 2,
    marginTop: 90,
    marginLeft: 320},
});
