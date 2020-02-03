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
import Boilerleft from "../../Image/Boiler New/Boilerleft.svg";

export default class Partboilerleft extends React.Component {
  static navigationOptions = {
    header: null
  }
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
            <Boilerleft height={400} width={win.width} alignSelf = 'center' />
            
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

const win = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"

  },
  containertop: {
    flex: 0.25,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    marginTop: "15%",
    marginRight: "2%"

  },
  containerbottom: {
    flex: 0.75,
    backgroundColor: "#fff",
    alignItems: "center"

  },
  containerbottom0: {
    borderColor: "#ff0",
    borderWidth: 2,
    height: "35%", 
    width: "80%",
    position: "absolute",
    marginTop: 0,
    marginLeft: "5%",
  },
   containerbottom1: {
    borderColor: "#f00",
    borderWidth: 2,
    height: "60%",
    width: "65%",
    position: "absolute",
    marginTop: "35%",
    marginLeft: "20%",
  },
});
