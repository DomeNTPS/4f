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
import {
  TouchableOpacity,
  ScrollView
} from "react-native-gesture-handler";
import ImageZoom from "react-native-image-pan-zoom";
import Boilerleft from "../../Image/Boiler New/Boilerleft.svg";

export default class Partboilerleft extends React.Component {
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
        <View style={styles.containerbottom}>
           <ScrollView
            maximumZoomScale={3}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Boilerleft height={400} width={410} alignSelf = 'center' />
            
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 144 ,width : 370}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerlefttop")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 248 ,width : 274}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerleftbottom")
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

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },

  containertop: {
    flex: 0.1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    paddingTop: 20

  },
  containerbottom: {
    flex: 0.9,
    backgroundColor: "#fff",
    alignItems: "center"

  },
  containerbottom0: {
    // backgroundColor: "#ff0",
    height: 144, 
    width: 370,
    position: "absolute",
    marginTop: 0,
    marginLeft: 20,
  },
   containerbottom1: {
    // backgroundColor: "#f00",
    height: 248,
    width: 274,
    position: "absolute",
    marginTop: 144,
    marginLeft: 110,
  },
});
