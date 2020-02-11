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
import Boiler from "../../Image/Boiler New/Boilerbottommid.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilerbottomcenter extends React.Component {
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
            <Boiler height={450} width={410} alignSelf = 'center' />
            < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 30 ,width : 50}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10CP003PI002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 30 ,width : 50}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10CP003PI002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 20 ,width : 15}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA011'})
              } >
                </ TouchableOpacity>
                </ View>
            < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 20 ,width : 15}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA010'})
              } >
                </ TouchableOpacity>
                </ View>
                
                < View style = {
              styles.containerbottomV3
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA009'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV4
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA012'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV5
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA006'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV6
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA007'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV7
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV8
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA008'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV9
            } >
            < TouchableOpacity style = {{height : 19 ,width : 15}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA014'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV10
            } >
            < TouchableOpacity style = {{height : 19 ,width : 15}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA013'})
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
  flex: 0.75,
  backgroundColor: "#fff",
  alignItems: "center",
  },
  containerbottomE1: {
    height: 30,
    width: 50,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 190,
    marginLeft: 213,
  },
  containerbottomE2: {
    height: 30,
    width: 50,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 237,
    marginLeft: 350,
  },
  containerbottomV1: {
    // backgroundColor: "#ff0",
    height: 20, 
    width: 15,
    position: "absolute",
    marginTop: 175,
    marginLeft: 157,
  },
   containerbottomV2: {
    // backgroundColor: "#f00",
    height: 20,
    width: 15,
    position: "absolute",
    marginTop: 195,
    marginLeft: 157,
  },
  
  containerbottomV3: {
    // backgroundColor: '#cd0',
    position: "absolute",
    height: 15,
    width: 20,
    marginTop: 210,
    marginLeft: 135,
  },
    containerbottomV4: {
    // backgroundColor: '#cdA',
    position: "absolute",
    height: 15,
    width: 20,
    marginTop: 210,
    marginLeft: 175,
  }, 
    containerbottomV5: {
    // backgroundColor: '#AAA',
    position: "absolute",
    height: 15,
    width: 20,
    marginTop: 255,
    marginLeft: 116,
  }, 
    containerbottomV6: {
    // backgroundColor: '#A0A',
    position: "absolute",
    height: 15,
    width: 20,
    marginTop: 255,
    marginLeft: 136,
  },
  containerbottomV7: {
    // backgroundColor: '#ABA',
    position: "absolute",
    height: 15,
    width: 20,
    marginTop: 255,
    marginLeft: 156.5,
  },
  containerbottomV8: {
    // backgroundColor: '#ADB',
    position: "absolute",
    height: 15,
    width: 20,
    marginTop: 255,
    marginLeft: 176.5,
  },
  containerbottomV9: {
    // backgroundColor: '#DBA',
    position: "absolute",
    height: 19,
    width: 15,
    marginTop: 222,
    marginLeft: 230,
  },
  containerbottomV10: {
    // backgroundColor: '#AFA',
    position: "absolute",
    height: 19,
    width: 15,
    marginTop: 242.5,
    marginLeft: 230,
  },
  
});
