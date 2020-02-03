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
import Boilerrightbottom from "../../Image/Boiler New/Boilerrightbottom.svg";
export default class Partboilerrightbottom extends React.Component {
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
        <View style={styles.containerbottomall}>
          <ScrollView
            maximumZoomScale={3}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Boilerrightbottom height={400
            } width={410} alignSelf = 'center' />
             < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 125, width : 48}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 24 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 10 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom3
            } >
            < TouchableOpacity style = {{height : 23 ,width : 70}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 20 ,width : 58}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAD10CL001LT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 20 ,width : 60}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAC10CT003TT003'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE3
            } >
            < TouchableOpacity style = {{height : 20 ,width : 60}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAC10CT004TT004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE4
            } >
            < TouchableOpacity style = {{height : 21 ,width : 60}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAC10CP001PT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA005'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV3
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV4
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV5
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAC10AA001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV6
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAC10AA002'})
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
    height: 125, 
    width: 48,
    position: "absolute",
    marginTop: 80,
    marginLeft: 140,
  },
  containerbottom1: {
    // backgroundColor: "#ff0",
     height: 24, 
     width: 20,
     position: "absolute",
     marginTop: 95,
     marginLeft: 210,
    },
  containerbottom2: {
  // backgroundColor: "#ff0",
   height: 10, 
   width: 30,
   position: "absolute",
   marginTop: 104,
   marginLeft: 254,
  },
  containerbottom3: {
  // backgroundColor: "#ff0",
   height: 23, 
   width: 70,
   position: "absolute",
   marginTop: 173,
   marginLeft: 15,
  },
  containerbottomE1: {
    // backgroundColor: "#f00",
    height: 20,
    width: 58,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 155,
    marginLeft: 333,
  },
  containerbottomE2: {
    height: 20,
    width: 60,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 216.5,
    marginLeft: 251,
  },
  containerbottomE3: {
    // backgroundColor: "#f00",
    height: 20,
    width: 60,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 216.5,
    marginLeft: 314,
  },
  containerbottomE4: {
    height: 21,
    width: 60,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 279,
    marginLeft: 251,
  },
   containerbottomV1: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 145,
    marginLeft: 206,
  },
  containerbottomV2: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 145,
    marginLeft: 243,
  },
  containerbottomV3: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 176,
    marginLeft: 206,
  },
  containerbottomV4: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 176,
    marginLeft: 243,
  },
  containerbottomV5: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 285.5,
    marginLeft: 181.5,
  },
  containerbottomV6: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 285.5,
    marginLeft: 217.5,
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
