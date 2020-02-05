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
import ImageZoom from "react-native-image-pan-zoom";
import Svg, { Circle, Rect } from "react-native-svg";
// import Logo from "../../Image/boiler/Water-Treatment-Steam-Boiler-749x372.png";
export default class PartEllipse extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
      const {navigation}=this.props;
      const KKS=navigation.getParam('KKS','some default value');
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
            maximumZoomScale={5}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >  
          <Image
            style = {
              {
                width: 300,
                height: 300
              }
              }
            source={require("../../Image/boiler/Alat_Ukur_Suhu_html_8f08d63c.jpg")}>
          </Image>
          <Text>{KKS}</Text>
           
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
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 10,
    flex: 0.9,
    backgroundColor: "#fff",
    alignItems: "center"
    //justifyContent: 'center',
  },
});
