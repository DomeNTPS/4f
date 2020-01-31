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
import Boiler from "../../Image/Boiler New/Boilerbottommid.svg";
export default class Partboilerbottomcenter extends React.Component {
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
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10 AA 011'})
              } >
                </ TouchableOpacity>
                </ View>
            < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10 AA 010'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 20 ,width : 60}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10LAB10CP003 PI 002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom3
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10 AA 009'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom4
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10 AA 012'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom5
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10 AA 006'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom6
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10 AA 007'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom7
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10 AA 001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom8
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10 AA 008'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom9
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10 AA 014'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom10
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10 AA 013'})
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
  // borderColor: "red",
  // borderStyle: "solid",
  // borderWidth: 10,
  alignItems: "center",
  },
  containerbottom0: {
    // backgroundColor: "#ff0",
    height: 25, 
    width: 25,
    position: "absolute",
    marginTop: 160,
    marginLeft: 150,
  },
   containerbottom1: {
    // backgroundColor: "#f00",
    height: 25,
    width: 25,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 190,
    marginLeft: 150,
  },
  containerbottom2: {
    height: 20,
    width: 60,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 194.5,
    marginLeft: 254,
  },
  containerbottom3: {
    // backgroundColor: '#cd0',
    position: "absolute",
    height: 25,
    width: 25,
    marginTop: 205,
    marginLeft: 120,
  },
    containerbottom4: {
    // backgroundColor: '#cdA',
    position: "absolute",
    height: 25,
    width: 25,
    marginTop: 205,
    marginLeft: 185,
  }, 
    containerbottom5: {
    // backgroundColor: '#AAA',
    position: "absolute",
    height: 25,
    width: 25,
    marginTop: 265,
    marginLeft: 87,
  }, 
    containerbottom6: {
    // backgroundColor: '#A0A',
    position: "absolute",
    height: 25,
    width: 25,
    marginTop: 265,
    marginLeft: 119,
  },
  containerbottom7: {
    // backgroundColor: '#ABA',
    position: "absolute",
    height: 25,
    width: 25,
    marginTop: 265,
    marginLeft: 153,
  },
  containerbottom8: {
    // backgroundColor: '#ADB',
    position: "absolute",
    height: 25,
    width: 25,
    marginTop: 265,
    marginLeft: 185,
  },
  containerbottom9: {
    // backgroundColor: '#DBA',
    position: "absolute",
    height: 25,
    width: 25,
    marginTop: 223,
    marginLeft: 270,
  },
  containerbottom10: {
    // backgroundColor: '#AFA',
    position: "absolute",
    height: 25,
    width: 25,
    marginTop: 248,
    marginLeft: 270,
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
