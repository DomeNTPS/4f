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
import Boilermiddletopright from "../../Image/Boiler New/Boilermidtopright.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilermiddletopright extends React.Component {
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
            <Boilermiddletopright height={400
            } width={400} alignSelf = 'center' />
                < View style = {
              styles.containerbottom3
            } >
            < TouchableOpacity style = {{height : 20 ,width : 70}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH10CT003TT003 '})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom4
            } >
            < TouchableOpacity style = {{height : 20 ,width : 70}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH10CT001TT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom5
            } >
            < TouchableOpacity style = {{height : 20 ,width : 70}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH10CT004TT004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom6
            } >
            < TouchableOpacity style = {{height : 20 ,width : 70}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH10CT002TT002'})
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
  containerbottom3: {
    // backgroundColor: "#f00",
    height: 25,
    width: 80,
    position: "absolute",
    marginTop: 315,
    marginLeft: 110,
  },
  containerbottom4: {
    height: 25,
    width: 80,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 315,
    marginLeft: 200,
  },
   containerbottom5: {
    height: 25,
    width: 80,
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 339,
    marginLeft: 110,
  },
  containerbottom6: {
    height: 25,
    width: 80,
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 339,
    marginLeft: 200,
  },
  bla: {
    flex: 0.03,
    alignItems: "center"
  }
});
