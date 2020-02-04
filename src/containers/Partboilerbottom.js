import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  Dimensions
} from "react-native";
import {
  TouchableOpacity,
  ScrollView
} from "react-native-gesture-handler";
import ImageZoom from "react-native-image-pan-zoom";
import Boilerbottom from "../../Image/Boiler New/Boilerbottom.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilerbottom extends React.Component {
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
            <Boilerbottom height={300} width={win.width} alignSelf = 'center' />
            
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 60 ,width : 160}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerbottomleft")
              } >
                </ TouchableOpacity>
                </View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 50 ,width : 180}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerbottomcenter")
              } >
                </TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 97 ,width : 75}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerbottomright")
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
    borderColor: "#ff0",
    borderWidth: 2,
    height: "10%", 
    width: "50%",
    position: "absolute",
    marginTop: "35%",
    marginLeft: 0,
  },
   containerbottom1: {
    borderColor: "#f00",
    borderWidth: 2,
    height: "23%",
    width: "40%",
    // alignSelf: "center",
    position: "absolute",
    marginTop: "40%",
    marginLeft: "52%",
  },
  containerbottom2: {
    height: "30%",
    width: "10%",
    // alignSelf: "flex-end",
    position: "absolute",
    borderColor: '#AB6',
    borderWidth: 2,
    marginTop: "16%",
    marginLeft: "80%"},
});
