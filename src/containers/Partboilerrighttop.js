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
import Boilerrighttop from "../../Image/boiler/boilerrighttop.svg";
export default class Partboilerrighttop extends React.Component {
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
            <Boilerrighttop height={200
            } width={410} alignSelf = 'center' />
                       < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 130, width : 52}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 7 ,width : 15}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 25 ,width : 76}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 23 ,width : 65}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAD10AA001LCV001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 22 ,width : 65}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAD10CP003PI003'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE3
            } >
            < TouchableOpacity style = {{height : 23 ,width : 65}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAD10CL004LI004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 9 ,width : 19}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA028'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 9 ,width : 19}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA029'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV3
            } >
            < TouchableOpacity style = {{height : 12 ,width : 26}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV4
            } >
            < TouchableOpacity style = {{height : 12 ,width : 26}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA030'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV5
            } >
            < TouchableOpacity style = {{height : 9 ,width : 19}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA026'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV6
            } >
            < TouchableOpacity style = {{height : 9 ,width : 19}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA027'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV7
            } >
            < TouchableOpacity style = {{height : 9 ,width : 19}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA024'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV8
            } >
            < TouchableOpacity style = {{height : 9 ,width : 19}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA025'})
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
  
  alignItems: "center",
  },
  containerbottom0: {
    // backgroundColor: "#ff0",
    height: 130, 
    width: 52,
    position: "absolute",
    marginTop: 40,
    marginLeft: 170,
  },
  containerbottom1: {
  // backgroundColor: "#ff0",
   height: 7, 
   width: 15,
   position: "absolute",
   marginTop: 60,
   marginLeft: 79,
  },
  containerbottom2: {
  // backgroundColor: "#ff0",
   height: 25, 
   width: 76,
   position: "absolute",
   marginTop: 134.5,
   marginLeft: 30.5,
  },
  containerbottomE1: {
    // backgroundColor: "#f00",
    height: 23,
    width: 65,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 18,
    marginLeft: 54,
  },
  containerbottomE2: {
    height: 22,
    width: 65,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 57,
    marginLeft: 314,
  },
  containerbottomE3: {
    // backgroundColor: "#f00",
    height: 23,
    width: 65,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 109,
    marginLeft: 320,
  },
   containerbottomV1: {
    height: 9,
    width: 19,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 65,
    marginLeft: 241,
  },
  containerbottomV2: {
    height: 9,
    width: 19,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 65,
    marginLeft: 281,
  },
  containerbottomV3: {
    height: 12,
    width: 26,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 80,
    marginLeft: 74,
  },
  containerbottomV4: {
    height: 12,
    width: 26,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 80,
    marginLeft: 124,
  },
  containerbottomV5: {
    height: 9,
    width: 19,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 97.5,
    marginLeft: 241,
  },
  containerbottomV6: {
    height: 9,
    width: 19,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 97.5,
    marginLeft: 281,
  },
  containerbottomV7: {
    height: 9,
    width: 19,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 133,
    marginLeft: 241,
  },
  containerbottomV8: {
    height: 9,
    width: 19,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 133,
    marginLeft: 281,
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
