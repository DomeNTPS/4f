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
import ContainerTop from '../Layout/containtop';

export default class Partboilermid extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
         <ContainerTop navigation ={this.props.navigation}>
        </ContainerTop>
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
            < TouchableOpacity style = {{height : "100%" ,width : "100%"}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilermiddletopleft")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : "100%" ,width : "100%"}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilermiddletopright")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style =  {{height : "100%" ,width : "100%"}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilermiddlebottomleft")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom3
            } >
            < TouchableOpacity style =  {{height : "100%" ,width : "100%"}}
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
      },
      containerbottom: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
        //justifyContent: 'center',
      },
      containerbottom0: {
        // backgroundColor: "#ff0",
        borderColor: "orange",
        borderWidth: 2,
        height: "54.5%",
        width: "45.5%",
        position: "absolute",
        marginTop: "4%",
        marginLeft: "7%",
      },
      containerbottom1: {
        // backgroundColor: "#f00",
        borderColor: "black",
        borderWidth: 2,
        height: "56%",
        width: "35%",
        position: "absolute",
        marginTop: "4%",
        marginLeft: "56%",
      },
      containerbottom2: {
        height: "0.5%",
        width: 70,
        position: "absolute",
        // backgroundColor: '#AB6',
        borderColor: "#AB6",
        borderWidth: 2,
        marginTop: "59%",
        marginLeft: "10%",
      },
        containerbottom3: {
        width: "10%",
        height: "2%",
        position: "absolute",
        // backgroundColor: '#bf0',
        borderColor: "blue",
        borderWidth: 2,
        marginTop: "59%",
        marginLeft: "45%",
      },
});
