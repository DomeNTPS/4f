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
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 20 ,width : 40}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10CP001PT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 20 ,width : 40}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10CP002PI001'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE3
            } >
            < TouchableOpacity style = {{height : 20 ,width : 40}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LAB10CT001TT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE4
            } >
            < TouchableOpacity style = {{height : 20 ,width : 40}}
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
   containerbottomE1: {
    // backgroundColor: "#f00",
    height: 20,
    width: 40,
    position: "absolute",
    marginTop: 85,
    marginLeft: 100,
  },
  containerbottomE2: {
    height: 20,
    width: 40,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 85,
    marginLeft: 141,
  },
  containerbottomE3: {
    // backgroundColor: "#f00",
    height: 20,
    width: 40,
    position: "absolute",
    marginTop: 85,
    marginLeft: 182,
  },
  containerbottomE4: {
    height: 20,
    width: 40,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 85,
    marginLeft: 224,
  },
   containerbottomV1: {
    height: 20,
    width: 15,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 110,
    marginLeft: 113,
  },
  containerbottomV2: {
    height: 20,
    width: 15,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 133,
    marginLeft: 113,
  },
  containerbottomV3: {
    height: 20,
    width: 15,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 110,
    marginLeft: 153,
  },
  containerbottomV4: {
    height: 20,
    width: 15,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 133,
    marginLeft: 153,
  },
  bla: {
    flex: 0.03,
    alignItems: "center"
  }
});
