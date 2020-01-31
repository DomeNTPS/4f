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
import Boilerright from "../../Image/Boiler New/Boilerright";

export default class Partboilerright extends React.Component {
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
            <Boilerright height={400} width={400} alignSelf = 'center' />
            
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 78 ,width : 156}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerrighttop")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 180 ,width : 145}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerrightmid")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 128 ,width : 183}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerrightbottom")
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
    // backgroundColor: "#ff0",
    height: 78, 
    width: 156,
    position: "absolute",
    marginTop: 0,
    marginLeft: 113,
  },
   containerbottom1: {
    // backgroundColor: "#f00",
    height: 180,
    width: 145,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 78,
    marginLeft: 170,
  },
  containerbottom2: {
    height: 128,
    width: 183,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 258,
    marginLeft: 113,
  },
});
