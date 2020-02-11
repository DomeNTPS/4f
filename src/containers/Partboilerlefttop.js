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
import Boilerlefttop from "../../Image/Boiler New/Boilerlefttop.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilerlefttop extends React.Component {
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
            <Boilerlefttop height={150
            } width={400} alignSelf = 'center' />
            < View style = {
              styles.containerbottom0
            } >
            < TouchableOpacity style = {{height : 50, width : 85}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom1
            } >
            < TouchableOpacity style = {{height : 10 ,width : 10}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom2
            } >
            < TouchableOpacity style = {{height : 13 ,width : 13}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom3
            } >
            < TouchableOpacity style = {{height : 5 ,width : 12}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottom4
            } >
            < TouchableOpacity style = {{height : 20 ,width : 10}}
            onPress = {
                () =>
                this.props.navigation.navigate("test")
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 18 ,width : 39}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10CF001FT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 18 ,width : 39}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10CT001TT001'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE3
            } >
            < TouchableOpacity style = {{height : 18 ,width : 39}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10CT002TT002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE4
            } >
            < TouchableOpacity style = {{height : 18 ,width : 39}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10CP001PT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE5
            } >
            < TouchableOpacity style = {{height : 18 ,width : 39}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA20AA001PCV001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE6
            } >
            < TouchableOpacity style = {{height : 18 ,width : 39}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10CP002PI002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA20AA002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA20AA003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV3
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA20AA001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV4
            } >
            < TouchableOpacity style = {{height : 6 ,width : 14}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10AA005'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV5
            } >
            < TouchableOpacity style = {{height : 6 ,width : 14}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10AA006'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV6
            } >
            < TouchableOpacity style = {{height : 6 ,width : 14}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10AA003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV7
            } >
            < TouchableOpacity style = {{height : 6 ,width : 14}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10AA004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV8
            } >
            < TouchableOpacity style = {{height : 16 ,width : 8}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10AA001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV9
            } >
            < TouchableOpacity style = {{height : 14 ,width : 6}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10LBA10AA002'})
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
    // backgroundColor: "#ff0",
    height: 50, 
    width: 85,
    position: "absolute",
    marginTop: 15,
    marginLeft: 7,
  },
  containerbottom1: {
  // backgroundColor: "#ff0",
   height: 10, 
   width: 10,
   position: "absolute",
   marginTop: 50,
   marginLeft: 225,
  },
  containerbottom2: {
    // backgroundColor: "#ff0",
   height: 13, 
   width: 13,
   position: "absolute",
   marginTop: 114,
   marginLeft: 205,
  },
  containerbottom3: {
    // backgroundColor: "#ff0",
   height: 5, 
   width: 12,
   position: "absolute",
   marginTop: 23,
   marginLeft: 285,
  },
  containerbottom4: {
    // backgroundColor: "#ff0",
   height: 20, 
   width: 10,
   position: "absolute",
   marginTop: 10,
   marginLeft: 384,
  },
  containerbottomE1: {
    // backgroundColor: "#f00",
    height: 18,
    width: 39,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 45,
    marginLeft: 132,
  },
  containerbottomE2: {
    height: 18,
    width: 39,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 65,
    marginLeft: 93,
  },
  containerbottomE3: {
    // backgroundColor: "#f00",
    height: 18,
    width: 38,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 65,
    marginLeft: 132,
  },
  containerbottomE4: {
    height: 18,
    width: 38,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 85,
    marginLeft: 132,
  },
  containerbottomE5: {
    // backgroundColor: "#f00",
    height: 18,
    width: 38,
    // alignSelf: "center",
    position: "absolute",
    marginTop: 10,
    marginLeft: 304,
  },
  containerbottomE6: {
    height: 18,
    width: 38,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 75,
    marginLeft: 280,
  },

   containerbottomV1: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 34,
    marginLeft: 237,
  },
  containerbottomV2: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 34,
    marginLeft: 260.5,
  },
  containerbottomV3: {
    height: 8,
    width: 16,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 34,
    marginLeft: 283.5,
  },
  containerbottomV4: {
    height: 6,
    width: 14,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 82,
    marginLeft: 238,
  },
  containerbottomV5: {
    height: 6,
    width: 14,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 82,
    marginLeft: 260,
  },
  containerbottomV6: {
    height: 6,
    width: 14,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 92,
    marginLeft: 188,
  },
  containerbottomV7: {
    height: 6,
    width: 14,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 92,
    marginLeft: 210,
  },
  containerbottomV8: {
    height: 16,
    width: 8,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#f00',
    marginTop: 110,
    marginLeft: 226,
  },
  containerbottomV9: {
    height: 14,
    width: 6,
    // alignSelf: "flex-end",
    position: "absolute",
    // backgroundColor: '#AB6',
    marginTop: 111,
    marginLeft: 258,
  },
  bla: {
    flex: 0.03,
    alignItems: "center"
  }
});
