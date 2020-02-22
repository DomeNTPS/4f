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
import Boilerrighttop from "../../Image/Boiler New/Boilerrighttop.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilerrighttop extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
     const kks1 = this.props.navigation.getParam("KKS1", "dont have value");
     const kks2 = this.props.navigation.getParam("KKS2", "dont have value");
     const kks3 = this.props.navigation.getParam("KKS3", "dont have value");
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
            <Boilerrighttop height={200
            } width={410} alignSelf = 'center' />
                < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 23 ,width : 65}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA001LCV001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 22 ,width : 65}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10CP003PI003'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE3
            } >
            < TouchableOpacity style = {{height : 23 ,width : 65}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10CL004LI004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA028'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA029'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV3
            } >
            < TouchableOpacity style = {{height : 15 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV4
            } >
            < TouchableOpacity style = {{height : 15 ,width : 30}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA030'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV5
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA026'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV6
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA027'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV7
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA024'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV8
            } >
            < TouchableOpacity style = {{height : 15 ,width : 20}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAD10AA025'})
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
    height: 23,
    width: 65,
    position: "absolute",
    marginTop: 25,
    marginLeft: 125,
  },
  containerbottomE2: {
    height: 22,
    width: 65,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 55,
    marginLeft: 295,
  },
  containerbottomE3: {
    // backgroundColor: "#f00",
    height: 23,
    width: 65,
    position: "absolute",
    marginTop: 91,
    marginLeft: 300,
  },
   containerbottomV1: {
    height: 15,
    width: 20,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 57,
    marginLeft: 250,
  },
  containerbottomV2: {
    height: 15,
    width: 20,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 57,
    marginLeft: 273,
  },
  containerbottomV3: {
    height: 15,
    width: 30,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 72,
    marginLeft: 148,
  },
  containerbottomV4: {
    height: 15,
    width: 30,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 72,
    marginLeft: 177,
  },
  containerbottomV5: {
    height: 15,
    width: 20,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 83,
    marginLeft: 250,
  },
  containerbottomV6: {
    height: 15,
    width: 20,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 83,
    marginLeft: 275,
  },
  containerbottomV7: {
    height: 15,
    width: 20,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 107,
    marginLeft: 250,
  },
  containerbottomV8: {
    height: 15,
    width: 20,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 107,
    marginLeft: 275,
  },
  bla: {
    flex: 0.03,
    alignItems: "center"
  }
});
