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
import axios from "axios";
// import Logo from "../../Image/boiler/Water-Treatment-Steam-Boiler-749x372.png";
export default class PartV extends React.Component {
  render() {
      // const {navigation}=this.props;
      // var KKS=navigation.getParam('KKS','some default value');
      
    
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
                paddingTop: 30,
                width: 200,
                height: 150
              }
              }
            source = {
              require("../../Image/boiler/PartV.png")
            }
            
            onPress={ () =>componentDidMount()}>
            
          </Image>
          <Text>hi</Text>
           
          </ScrollView>
        </View>
      </View>
    );
  }
  
  componentDidMount(){
    
    const { navigation } = this.props;
    const kks = navigation.getParam('KKS', 'some default value');
    var a =axios.get(`http://10.26.11.189:3000/running_equipment/${kks}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    console.log(a);
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
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 10,
    flex: 0.9,
    backgroundColor: "#fff",
    alignItems: "center"
    //justifyContent: 'center',
  },
  containerpicture: {
    //flex: 0.8,
    backgroundColor: "#fff"
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  parttext: {
    alignItems: "center",
    paddingTop: 30,

  }
});
