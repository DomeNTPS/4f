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
import Boilerlefttop from "../../Image/boiler/boilerlefttop.svg";

export default class Partboilerlefttop extends React.Component {
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
            <Boilerlefttop height={200} width={410} alignSelf = 'center' />
            
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 72 ,width : 185}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerlefttop")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 124 ,width : 137}}
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

    //justifyContent: 'center',
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

    //justifyContent: 'center',
  },
  containerbottom: {
    flex: 0.9,
    backgroundColor: "#fff",
    alignItems: "center"
    //justifyContent: 'center',
  },
  containerbottom0: {
    //  backgroundColor: "#ff0",
    height: 72, 
    width: 185,
    position: "absolute",
    marginTop: 0,
    marginLeft: 110,
  },
   containerbottom1: {
    //  backgroundColor: "#f00",
    height: 124,
    width: 137,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 72,
    marginLeft: 157,
  },
});
