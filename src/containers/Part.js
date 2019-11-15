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
import Boiler from "../../Image/boiler/Untitled-1-01(fix).svg";
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
            {/* <View style={styles.containerbottom0}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Partboilerbottom")
                }
              >
                <Image
                  style={{
                    paddingRight: 0,
                    paddingBottom: 0,
                    width: 240,
                    height: 20
                  }}
                  source={require("../../Image/equipment/boilerล่างแก้ไข.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containerbottom2}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Partboilermiddle")
                }
              >
                <Image
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                    width: 110,
                    height: 120
                  }}
                  source={require("../../Image/equipment/boilerกลางแก้ไข.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.containerbottom5}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Partboilerleft")}
              >
                <Image
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                    width: 110,
                    height: 120
                  }}
                  source={require("../../Image/equipment/boilerซ้ายแก้ไข1.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.containerbottom3}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Partboilerright")
                }
              >
                <Image
                  style={{
                    paddingRight: 0,
                    paddingBottom: 0,
                    width: 85,
                    height: 140
                  }}
                  source={require("../../Image/equipment/boilerขวาแก้ไข.png")}
                />
              </TouchableOpacity>
            </View> */}
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
  containerbottom5: {
    // flex: 0.6,
    paddingTop: 50,
    // paddingRight : 50,
    // backgroundColor: '#f0f',
    // flexDirection: "row",
    padding: 43,
    alignSelf: "flex-start",
    position: "absolute"
  },
  containerbottom2: {
    // flex: 0.6,
    paddingTop: 92,
    // paddingRight : 50,
    // backgroundColor: '#0ff',
    // flexDirection: "row",
    padding: 158,
    height: 300,
    alignSelf: "center",
    position: "absolute"
  },
  containerbottom3: {
    // flex: 0.6,
    paddingTop: 63,
    // padding: 200,
    alignSelf: "flex-end",
    paddingRight: 68,
    // backgroundColor: '#AB6',
    // flexDirection: "row",
    position: "absolute"
  },
  containerbottom0: {
    backgroundColor: "#fff",
    // flexDirection: "column",
    // flex: 0.9,
    paddingTop: 400,
    paddingRight: 20.5,
    position: "absolute",
    alignSelf: "center"
    // height: 50,
    // width: 250,
  },
  containerbottomall: {
    flex: 0.9,
    backgroundColor: "#fff",
    flexDirection: "row"
    // paddingBottom: 200,
    // padding: 50
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
