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
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ImageZoom from "react-native-image-pan-zoom";
import Boilerrightbottom from "../../Image/Boiler New/Boilerrightbottom.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilerrightbottom extends React.Component {
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
            <Boilerrightbottom height={400
            } width={410} alignSelf = 'center' />
                < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 35 ,width : 75}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10CL005LIA005'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 30 ,width : 70}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10CL001LT001'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 15 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA009'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 15 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA010'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV3
            } >
            < TouchableOpacity style = {{height : 15 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA007'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV4
            } >
            < TouchableOpacity style = {{height : 15 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA008'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV5
            } >
            < TouchableOpacity style = {{height : 15 ,width : 15}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV6
            } >
            < TouchableOpacity style = {{height : 15 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA005'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV7
            } >
            < TouchableOpacity style = {{height : 15 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV8
            } >
            < TouchableOpacity style = {{height : 15 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV9
            } >
            < TouchableOpacity style = {{height : 30 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA006'})
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
  containerbottomE1: {
    // backgroundColor: "#f00",
    height: 35,
    width: 75,
    position: "absolute",
    marginTop: 115,
    marginLeft: 310,
  },
  containerbottomE2: {
    height: 30,
    width: 70,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 225,
    marginLeft: 283,
  },
   containerbottomV1: {
    height: 15,
    width: 25,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 107,
    marginLeft: 185,
  },
  containerbottomV2: {
    height: 15,
    width: 25,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 107,
    marginLeft: 213,
  },
  containerbottomV3: {
    height: 15,
    width: 25,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 138,
    marginLeft: 185,
  },
  containerbottomV4: {
    height: 15,
    width: 25,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 138,
    marginLeft: 213,
  },
  containerbottomV5: {
    height: 15,
    width: 25,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 218,
    marginLeft: 185,
  },
  containerbottomV6: {
    height: 15,
    width: 25,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 218,
    marginLeft: 213,
  },
  containerbottomV7: {
    height: 15,
    width: 25,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 248,
    marginLeft: 185,
  }, 
  containerbottomV8: {
    height: 15,
    width: 25,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 248,
    marginLeft: 213,
  },
  containerbottomV9: {
    height: 30,
    width: 25,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 173,
    marginLeft: 186,
  },
  bla: {
    flex: 0.03,
    alignItems: "center"
  }
});
