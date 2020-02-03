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
import Boilerrightmid from "../../Image/Boiler New/Boilerrightmid.svg";
export default class Partboilerrightmid extends React.Component {
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
            <Boilerrightmid height={400
            } width={410} alignSelf = 'center' />
             < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 365, width : 55}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 32 ,width : 11}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 23 ,width : 67}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAD10CL003LT003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 23 ,width : 67}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAD10CL002LT002'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE3
            } >
            < TouchableOpacity style = {{height : 23 ,width : 67}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAD10CP002PT002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE4
            } >
            < TouchableOpacity style = {{height : 23 ,width : 67}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAD10CP001PT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE5
            } >
            < TouchableOpacity style = {{height : 27 ,width : 85}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAD10CL005LIA005'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA021'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA022'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV3
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA019'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV4
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA020'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV5
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA017'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV6
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA018'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV7
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA015'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV8
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA016'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV9
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA013'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV10
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA014'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV11
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA011'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV12
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA012'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV13
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA009'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV14
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA010'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV15
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA007'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV16
            } >
            < TouchableOpacity style = {{height : 9 ,width : 18}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA008'})
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
    height: 365, 
    width: 55,
    position: "absolute",
    marginTop: 15,
    marginLeft: 31,
  },
  containerbottom1: {
    // backgroundColor: "#ff0",
    height: 25, 
    width: 25,
    position: "absolute",
    marginTop: 20,
    marginLeft: 110,
  },
  containerbottom2: {
    // backgroundColor: "#ff0",
    height: 11, 
    width: 32,
    position: "absolute",
    marginTop: 28.5,
    marginLeft: 162,
  },
  containerbottomE1: {
    // backgroundColor: "#f00",
    height: 23,
    width: 67,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 85,
    marginLeft: 250,
  },
  containerbottomE2: {
    height: 23,
    width: 67,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 171,
    marginLeft: 250,
  },
  containerbottomE3: {
    // backgroundColor: "#f00",
    height: 23,
    width: 67,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 233,
    marginLeft: 181,
  },
  containerbottomE4: {
    height: 23,
    width: 67,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 276,
    marginLeft: 181,
  },
  containerbottomE5: {
    // backgroundColor: "#f00",
    height: 27,
    width: 85,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 334,
    marginLeft: 282,
  },
   containerbottomV1: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 73.5,
    marginLeft: 106.5,
  },
  containerbottomV2: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 73.5,
    marginLeft: 148.5,
  },
  containerbottomV3: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 109.5,
    marginLeft: 106.5,
  },
  containerbottomV4: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 109.5,
    marginLeft: 148.5,
  },
  containerbottomV5: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 159.5,
    marginLeft: 106.5,
  },
  containerbottomV6: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 159.5,
    marginLeft: 148.5,
  },
  containerbottomV7: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 195,
    marginLeft: 106.5,
  },
  containerbottomV8: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 195,
    marginLeft: 148.5,
  },
  containerbottomV9: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 239.5,
    marginLeft: 106.5,
  },
  containerbottomV10: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 239.5,
    marginLeft: 148.5,
  },
  containerbottomV11: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 283,
    marginLeft: 106.5,
  },
  containerbottomV12: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 283,
    marginLeft: 148.5,
  },
  containerbottomV13: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 325,
    marginLeft: 106.5,
  },
  containerbottomV14: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 325,
    marginLeft: 148.5,
  },
  containerbottomV15: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 360.5,
    marginLeft: 106.5,
  },
  containerbottomV16: {
    height: 9,
    width: 18,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 360.5,
    marginLeft: 148.5,
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
