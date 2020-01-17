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
            < TouchableOpacity style = {{height : 331, width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 331 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 7 ,width : 13}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom3
            } >
            < TouchableOpacity style = {{height : 10 ,width : 28}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom4
            } >
            < TouchableOpacity style = {{height : 28 ,width : 32}}
            onPress = {
                () =>
                this.props.navigation.navigate("test",{KKS:'10HAH30AA004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH30CT003TT003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH30CT004TT004'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE3
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH30CT001TT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE4
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH30CP003PI003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE5
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH30CT002TT002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE6
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH30CP002PT002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE7
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH30AA001PCV001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE8
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH30CP001PT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA010'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA009'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV3
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA008'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV4
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA007'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV5
            } >
            < TouchableOpacity style = {{height : 12 ,width : 22}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV6
            } >
            < TouchableOpacity style = {{height : 12 ,width : 22}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA006'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV7
            } >
            < TouchableOpacity style = {{height : 12 ,width : 22}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA005'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV8
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV9
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA003'})
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
    backgroundColor: "#ff0",
    height: 331, 
    width: 25,
    position: "absolute",
    marginTop: 35,
    marginLeft: 198,
  },
  containerbottom1: {
  backgroundColor: "#ff0",
   height: 331, 
   width: 25,
   position: "absolute",
   marginTop: 35,
   marginLeft: 282,
  },
  containerbottom2: {
    backgroundColor: "#ff0",
   height: 7, 
   width: 13,
   position: "absolute",
   marginTop: 179,
   marginLeft: 100,
  },
  containerbottom3: {
    backgroundColor: "#ff0",
   height: 10, 
   width: 28,
   position: "absolute",
   marginTop: 195,
   marginLeft: 50,
  },
  containerbottom4: {
    backgroundColor: "#ff0",
   height: 28, 
   width: 32,
   position: "absolute",
   marginTop: 230,
   marginLeft: 113,
  },
  containerbottomE1: {
    backgroundColor: "#f00",
    height: 20,
    width: 56,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 38,
    marginLeft: 9,
  },
  containerbottomE2: {
    height: 20,
    width: 56,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 38,
    marginLeft: 67,
  },
  containerbottomE3: {
    backgroundColor: "#f00",
    height: 20,
    width: 56,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 35,
    marginLeft: 318,
  },
  containerbottomE4: {
    height: 20,
    width: 56,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 67,
    marginLeft: 67,
  },
  containerbottomE5: {
    backgroundColor: "#f00",
    height: 20,
    width: 56,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 55,
    marginLeft: 318,
  },
  containerbottomE6: {
    height: 20,
    width: 56,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 104.5,
    marginLeft: 67,
  },
  containerbottomE7: {
    backgroundColor: "#f00",
    height: 20,
    width: 56,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 143,
    marginLeft: 78,
  },
  containerbottomE8: {
    height: 20,
    width: 56,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 344,
    marginLeft: 66.5,
  },
   containerbottomV1: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 73,
    marginLeft: 138,
  },
  containerbottomV2: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#f00',
    marginTop: 73,
    marginLeft: 172,
  },
  containerbottomV3: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 110,
    marginLeft: 138,
  },
  containerbottomV4: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#f00',
    marginTop: 110,
    marginLeft: 172,
  },
  containerbottomV5: {
    height: 12,
    width: 22,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 195,
    marginLeft: 96,
  },
  containerbottomV6: {
    height: 12,
    width: 22,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#f00',
    marginTop: 195,
    marginLeft: 130,
  },
  containerbottomV7: {
    height: 12,
    width: 22,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 195,
    marginLeft: 164,
  },
  containerbottomV8: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#f00',
    marginTop: 350.5,
    marginLeft: 138,
  },
  containerbottomV9: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 350.5,
    marginLeft: 172,
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