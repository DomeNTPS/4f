import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  Dimensions,
} from "react-native";
import {
  TouchableOpacity,
  ScrollView
} from "react-native-gesture-handler";
import ImageZoom from "react-native-image-pan-zoom";
import Boilermid from "../../Image/Boiler New/Boilermid.svg";

export default class Partboilermid extends React.Component {
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
            <Boilermid height={400} width={win.width} alignSelf = 'center' />
            
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 215 ,width : 180}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilermiddletopleft")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 217 ,width : 130}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilermiddletopright")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 100 ,width : 150}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilermiddlebottomleft")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom3
            } >
            < TouchableOpacity style = {{height : 150 ,width : 120}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilermiddlebottomright")
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
        borderColor: "orange",
        borderWidth: 5,
        height: 215,
        width: 183,
        position: "absolute",
        marginTop: "4%",
        marginLeft: "7%",
      },
      containerbottom1: {
        // backgroundColor: "#f00",
        borderColor: "black",
        borderWidth: 5,
        height: 217,
        width: 130,
        position: "absolute",
        marginTop: "4%",
        marginLeft: "54%",
      },
      containerbottom2: {
        height: 30,
        width: 110,
        position: "absolute",
        // backgroundColor: '#AB6',
        borderColor: "red",
        borderWidth: 5,
        marginTop: "57%",
        marginLeft: "6%",
      },
        containerbottom3: {
        height: 50,
        width: 30,
        position: "absolute",
        // backgroundColor: '#bf0',
        borderColor: "blue",
        borderWidth: 5,
        marginTop: "57%",
        marginLeft: "45%",
      },
});
