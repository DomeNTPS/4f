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
import Boiler from "../../Image/boiler/boiler fix.svg";
export default class Part extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containertop}>
          <TouchableOpacity
            title="Scan"
            onPress={() => this.props.navigation.navigate("ScanScreen")}
          >
            <Image
              style={{
                paddingRight: 20,
                paddingTop: 30,
                width: 50,
                height: 50
              }}
              source={require("../../Image/Untitled-1.png")}
            />
            <View>
              <Text style={{ paddingRight: 15 }}>Qr scan</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerbottomall}>
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
            < TouchableOpacity style = {{height : 450 ,width : 410}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerbottom")
              } >
                </ TouchableOpacity>
                </ View>
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 250 ,width : 170}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerleft")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 300 ,width : 130}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilermiddle")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 300 ,width : 130}}
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
  containertop: {
    flex: 0.1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    paddingTop: 20
    //justifyContent: 'center',
  },
  containerbottomall: {
  flex: 0.9,
  backgroundColor: "#fff",
  borderColor: "red",
  borderStyle: "solid",
  borderWidth: 10,
  alignItems: "center",
  },
  containerbottom0: {
    // backgroundColor: "#ff0",
    height: 200, 
    width: 160,
    position: "absolute",
    marginTop: 60,
  },
   containerbottom1: {
    // backgroundColor: "#f00",
    height: 153,
    width: 153,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 136,
    marginLeft: 147,
  },
  containerbottom2: {
    height: 160,
    width: 100,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 120,
    marginLeft: 300,
  },
  containerbottom3: {
    alignSelf: "stretch",
    // backgroundColor: '#cd0',
    position: "absolute",
    height: 80,
    width: 330,
    marginTop: 285,
    marginLeft: 50,
  },
  
  containerpicture: {
    //flex: 0.8,
    backgroundColor: "#fff"
    //alignItems: 'center',
    //justifyContent: 'center',
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
