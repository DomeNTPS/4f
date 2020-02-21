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
import Boilerbuttomright from "../../Image/Boiler New/Boilerbottomright.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilerbottomleft extends React.Component {
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
            <Boilerbuttomright height={400
            } width={410} alignSelf = 'center' />
             < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 32 ,width : 60}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:`${kks1}${kks2}${kks3}CT003TT003`})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 32 ,width : 60}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:`${kks1}${kks2}${kks3}CT004TT004`})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE3
            } >
            < TouchableOpacity style = {{height : 32 ,width : 80}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:`${kks1}${kks2}${kks3}CP001PT001`})
              } >
                </TouchableOpacity>
                </View>
                < View style = {
              styles.containerbottomE4 
            } >
            < TouchableOpacity style = {{height : 32 ,width : 80}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:`${kks1}${kks2}${kks3}CT002TT002`})
              } >
                </TouchableOpacity>
                </View>
                < View style = {
              styles.containerbottomE5
            } >
            < TouchableOpacity style = {{height : 32 ,width : 80}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:`${kks1}${kks2}${kks3}CT001TT001`})
              } >
                </TouchableOpacity>
                </View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:`${kks1}${kks2}${kks3}AA001`})
              } >
                </TouchableOpacity>
                </View>
                < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 25 ,width : 25}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:`${kks1}${kks2}${kks3}AA002`})
              } >
                </TouchableOpacity>
                </View>
            <Text> {kks1},{kks2},{kks3} </Text>
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
    // backgroundColor: "#ff0",
    height: 32, 
    width: 60,
    position: "absolute",
    marginTop: 60,
    marginLeft: 205,
  },
  containerbottomE2: {
    // backgroundColor: "#f00",
    height: 32,
    width: 60,
    position: "absolute",
    marginTop: 60,
    marginLeft: 265,
  },
  containerbottomE3: {
    height: 32,
    width: 80,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 126,
    marginLeft: 205,
  },
  containerbottomE4: {
    // backgroundColor: '#cd0',
    position: "absolute",
    height: 32,
    width: 80,
    marginTop: 205,
    marginLeft: 205,
  },
  containerbottomE5: {
    // backgroundColor: '#cA0',
    position: "absolute",
    height: 32,
    width: 80,
    marginTop: 275,
    marginLeft: 205,
  },
  containerbottomV1: {
    //  backgroundColor: '#cA9',
     position: "absolute",
     height: 25,
     width: 25,
     marginTop: 125,
     marginLeft: 145,
  },
  containerbottomV2: {
      // backgroundColor: '#cD0',
      position: "absolute",
      height: 25,
      width: 25,
      marginTop: 126,
      marginLeft: 177,
  },
  bla: {
    flex: 0.03,
    alignItems: "center"
  }
});