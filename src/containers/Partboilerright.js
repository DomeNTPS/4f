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
import Boilerright from "../../Image/Boiler New/Boilerright";
import ContainerTop from '../Layout/containtop';
export default class Partboilerright extends React.Component {
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
            <Boilerright height={400} width={400} alignSelf = 'center' />
            
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 78 ,width : 156}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerrighttop")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 180 ,width : 145}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerrightmid")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 128 ,width : 183}}
            onPress = {
                () =>
                this.props.navigation.navigate("Partboilerrightbottom")
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
    borderColor: "#000",
    borderWidth: 2,
    height: "30%", 
    width: "55%",
    position: "absolute",
    marginTop: 0,
    marginLeft: "15%",
  },
   containerbottom1: {
    borderColor: "#f00",
    borderWidth: 2,
    height: "23%",
    width: "20%",
    // alignSelf: "center",
    position: "absolute",
    marginTop: "30%",
    marginLeft: "43%",
  },
  containerbottom2: {
    height: "30%",
    width: "49%",
    // alignSelf: "flex-end",
    position: "absolute",
    borderColor: '#AB6',
    borderWidth:2,
    marginTop: "64%",
    marginLeft: "28%",
  },
});
