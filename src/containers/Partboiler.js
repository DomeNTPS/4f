import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image
} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ImageZoom from "react-native-image-pan-zoom";
import Boiler from "../../Image/Boiler New/Boiler.svg";
import ContainerTop from '../Layout/containtop';
export default class PartBoiler extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <ContainerTop navigation ={this.props.navigation}>
        </ContainerTop>
        <View  style={styles.containerbottom}>
        <ScrollView
            maximumZoomScale={3}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
          
            <Boiler height={450} width={410} alignSelf = 'center' />
            < View style = {
              styles.containerbottom3
            } >
            <TouchableOpacity style = {{height : 100 ,width : 330}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerbottom")
              } >
                </TouchableOpacity>
                </ View>
            < View style = {
              styles.containerbottom0
            } >
            <TouchableOpacity style = {{height : 200 ,width : 149}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerleft")
              } >
                </TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 157 ,width : 130}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilermiddle")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 153 ,width : 120}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerright")
              } >
                </ TouchableOpacity>
                </ View>
        </ScrollView>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containerbottomall: {
  flex: 1,
  alignItems: "center",
  },
  containerbottom0: {
    borderColor: "#ff0",
    borderWidth: 2,
    height: "30%", 
    width: "32%",
    position: "absolute",
    marginTop: "20%",
    marginLeft: "3%",
  },
   containerbottom1: {
    borderColor: "#f00",
    borderWidth: 2,
    height: "20%",
    width: "14%",
    // alignSelf: "center",
    position: "absolute",
    marginTop: "35%",
    marginLeft: "36%",
  },
  containerbottom2: {
    height: "30%",
    width: "32%",
    // alignSelf: "flex-end",
    position: "absolute",
    borderColor: '#AB6',
    borderWidth: 2,
    marginTop: "20%",
    marginLeft: "70%",
  },
  containerbottom3: {
    // alignSelf: "stretch",
    borderColor: '#cd0',
    borderWidth: 2,
    position: "absolute",
    height: 100,
    width: 330,
    marginTop: 255,
    marginLeft: 60,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },
  bla: {
    flex: 0.03,
    alignItems: "center"
  }
});
