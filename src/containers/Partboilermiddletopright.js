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
import Boilermiddletopright from "../../Image/boiler/boilermidtopright.svg";
export default class Partboilermiddletopright extends React.Component {
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
            <Boilermiddletopright height={400
            } width={400} alignSelf = 'center' />
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 315 ,width : 30}}
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
            < TouchableOpacity style = {{height : 315 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10LAB10CP001PT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 315 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10LAB10CP002PI001'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom3
            } >
            < TouchableOpacity style = {{height : 20 ,width : 70}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH10CT003 TT 003 '})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom4
            } >
            < TouchableOpacity style = {{height : 20 ,width : 70}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH10CT001 TT 001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom5
            } >
            < TouchableOpacity style = {{height : 20 ,width : 70}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH10CT004 TT 004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom6
            } >
            < TouchableOpacity style = {{height : 20 ,width : 70}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH10CT002 TT 002'})
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
    height: 315, 
    width: 30,
    position: "absolute",
    marginTop: 10,
    marginLeft: 80,
  },
   containerbottom1: {
    // backgroundColor: "#f00",
    height: 315,
    width: 30,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 10,
    marginLeft: 190,
  },
  containerbottom2: {
    height: 315,
    width: 30,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 10,
    marginLeft: 290,
  },
  containerbottom3: {
    // backgroundColor: "#f00",
    height: 20,
    width: 70,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 340,
    marginLeft: 115,
  },
  containerbottom4: {
    height: 25,
    width: 70,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 338,
    marginLeft: 223,
  },
   containerbottom5: {
    height: 20,
    width: 70,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 365,
    marginLeft: 115,
  },
  containerbottom6: {
    height: 20,
    width: 70,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 365,
    marginLeft: 223,
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
