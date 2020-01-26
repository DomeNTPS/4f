import React from "react";
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
import { TouchableOpacity } from "react-native-gesture-handler";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
export default class Home extends React.Component {
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
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          captureEvent={true}
          style={styles.containerbottom}
        >
          <TouchableOpacity
              title="Scan"
              alignItems = "center"
              onPress={() => this.props.navigation.navigate("Part")}
            >
              <Image
                style = {
                  {
                    width: 400,
                    height: 230
                  }
                }
                source={require("../../Image/boiler/Water-Treatment-Steam-Boiler-749x372.png")}>
              </Image>
              
            </TouchableOpacity>
          </ReactNativeZoomableView>
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
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 10,
    flex: 0.9,
    backgroundColor: "#fff",
    alignItems: "center",
    width:"100%",
    //justifyContent: 'center',
  },
  containerpicture: {
    //flex: 0.8,
    backgroundColor: "#fff"
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
