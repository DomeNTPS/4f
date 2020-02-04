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
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ImageZoom from "react-native-image-pan-zoom";
import Boilermiddletopleft from "../../Image/Boiler New/Boilermidtopleft.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilermiddletopleft extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
         <ContainerTop navigation ={this.props.navigation}>
        </ContainerTop>
        <View style={styles.containerbottomall}>
          <ScrollView
            maximumZoomScale={3}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Boilermiddletopleft height={500} width={win.width} alignSelf = 'center' />
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 255 ,width : 27}}
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
            < TouchableOpacity style = {{height : 255 ,width : 27}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 255 ,width : 27}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom3
            } >
            < TouchableOpacity style = {{height : 20 ,width : 60}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH20CT001TT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom4
            } >
            < TouchableOpacity style = {{height : 20 ,width : 60}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH20CT002TT002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom5
            } >
            < TouchableOpacity style = {{height : 20 ,width : 60}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH20CT003TT003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom6
            } >
            < TouchableOpacity style = {{height : 20 ,width : 60}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartEllipse",{KKS:'10HAH20CT004TT004'})
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
  containerbottomall: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  },
  containerbottom0: {
    backgroundColor: "#ff0",
    height: 255, 
    width: 27,
    position: "absolute",
    marginTop: 60,
    marginLeft: 73,
  },
   containerbottom1: {
    backgroundColor: "#f00",
    height: 255,
    width: 27,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 60,
    marginLeft: 165,
  },
  containerbottom2: {
    height: 260,
    width: 27,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 55,
    marginLeft: 249,
  },
  containerbottom3: {
    // backgroundColor: "#fA0",
    height: 20,
    width: 60,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 20,
    marginLeft: 280,
  },
  containerbottom4: {
    height: 20,
    width: 60,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AF6',
    marginTop: 40,
    marginLeft: 280,
  },
   containerbottom5: {
    height: 20,
    width: 60,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 323,
    marginLeft: 100,
  },
  containerbottom6: {
    height: 20,
    width: 60,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 345,
    marginLeft: 100,
  },
  bla: {
    flex: 0.03,
    alignItems: "center"
  }
});
