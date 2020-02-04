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
import Boilerbottomleft from "../../Image/Boiler New/Boilerbottomleft.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilerbottomleft extends React.Component {
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
            <Boilerbottomleft height={200} width={410} alignSelf = 'center' />
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 13 ,width : 85}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
          
                
              }
              
               >
                
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 13 ,width : 33}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10CP001PT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 13 ,width : 33}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10CP002PI001'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE3
            } >
            < TouchableOpacity style = {{height : 13 ,width : 33}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10CT001TT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE4
            } >
            < TouchableOpacity style = {{height : 13 ,width : 33}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10CF001FT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 10 ,width : 5}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 10 ,width : 5}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV3
            } >
            < TouchableOpacity style = {{height : 10 ,width : 5}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA005'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV4
            } >
            < TouchableOpacity style = {{height : 10 ,width : 5}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10AA004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 8 ,width : 10}}
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
    //  backgroundColor: "#ff0",
    height: 10, 
    width: 50,
    position: "absolute",
    marginTop: 148,
    marginLeft: 30,
  },
  containerbottom1: {
    // backgroundColor: "#ff0",
   height: 8, 
   width: 10,
   position: "absolute",
   marginTop: 148,
   marginLeft: 240,
 },
   containerbottomE1: {
      // backgroundColor: "#f00",
    height: 13,
    width: 33,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 87.5,
    marginLeft: 104,
  },
  containerbottomE2: {
    height: 13,
    width: 33,
    // alignSelf: "flex-end",
    position: "absolute",
    //  backgroundColor: '#AB6',
    marginTop: 87.5,
    marginLeft: 144,
  },
  containerbottomE3: {
      // backgroundColor: "#f00",
    height: 13,
    width: 33,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 87.5,
    marginLeft: 184,
  },
  containerbottomE4: {
    height: 13,
    width: 33,
    // alignSelf: "flex-end",
    position: "absolute",
    //  backgroundColor: '#AB6',
    marginTop: 87.5,
    marginLeft: 226,
  },
   containerbottomV1: {
    height: 10,
    width: 5,
    // alignSelf: "flex-end",
    position: "absolute",
    //  backgroundColor: '#AB6',
    marginTop: 115,
    marginLeft: 118,
  },
  containerbottomV2: {
    height: 10,
    width: 5,
    // alignSelf: "flex-end",
    position: "absolute",
    //  backgroundColor: '#f00',
    marginTop: 135,
    marginLeft: 118,
  },
  containerbottomV3: {
    height: 10,
    width: 5,
    // alignSelf: "flex-end",
    position: "absolute",
    //  backgroundColor: '#AB6',
    marginTop: 115,
    marginLeft: 158,
  },
  containerbottomV4: {
    height: 10,
    width: 5,
    // alignSelf: "flex-end",
    position: "absolute",
    //  backgroundColor: '#f00',
    marginTop: 135,
    marginLeft: 158,
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
