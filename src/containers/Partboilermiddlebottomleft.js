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
import Boilermiddlebottomleft from "../../Image/boiler/boilermidbottom.svg";
export default class Partboilermiddlebottomleft extends React.Component {
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
            <Boilermiddlebottomleft height={400
            } width={400} alignSelf = 'center' />
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 40 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
          
                
              }
              
               >
                
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 40 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10LAB10CP001PT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 40 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10LAB10CP002PI001'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom3
            } >
            < TouchableOpacity style = {{height : 40 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10LAB10CT001TT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom4
            } >
            < TouchableOpacity style = {{height : 40 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10LAB10CF001FT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom5
            } >
            < TouchableOpacity style = {{height : 40 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom6
            } >
            < TouchableOpacity style = {{height : 40 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom7
            } >
            < TouchableOpacity style = {{height : 40 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA005'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom8
            } >
            < TouchableOpacity style = {{height : 40 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom9
            } >
            < TouchableOpacity style = {{height : 40 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
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
  borderColor: "red",
  borderStyle: "solid",
  borderWidth: 10,
  alignItems: "center",
  },
  containerbottom0: {
    backgroundColor: "#ff0",
    height: 53, 
    width: 117,
    position: "absolute",
    marginTop: 300,
    marginLeft: 70,
  },
   containerbottom1: {
    backgroundColor: "#f00",
    height: 40,
    width: 30,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 54,
    marginLeft: 220,
  },
  containerbottom2: {
    height: 40,
    width: 30,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 110,
    marginLeft: 220,
  },
  containerbottom3: {
    backgroundColor: "#f00",
    height: 40,
    width: 30,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 165,
    marginLeft: 220,
  },
  containerbottom4: {
    height: 40,
    width: 30,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 220,
    marginLeft: 220,
  },
   containerbottom5: {
    height: 40,
    width: 30,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 90,
    marginLeft: 308,
  },
  containerbottom6: {
    height: 40,
    width: 30,
    // alignSelf: "flex-end",
    position: "absolute",
    backgroundColor: '#f00',
    marginTop: 180,
    marginLeft: 308,
  },
  containerbottom7: {
    height: 13,
    width: 8,
    // alignSelf: "flex-end",
    position: "absolute",
    //  backgroundColor: '#AB6',
    marginTop: 95,
    marginLeft: 217.5,
  },
  containerbottom8: {
    height: 13,
    width: 8,
    // alignSelf: "flex-end",
    position: "absolute",
    //  backgroundColor: '#f00',
    marginTop: 120.5,
    marginLeft: 217.5,
  },
  containerbottom9: {
    //  backgroundColor: "#ff0",
    height: 13, 
    width: 15,
    position: "absolute",
    marginTop: 138,
    marginLeft: 340,
  },
  
  containerpicture: {
    //flex: 0.8,
    // backgroundColor: "#fff"
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