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
import Boilerleftbottom from "../../Image/Boiler New/Boilerleftbottom.svg";
import ContainerTop from '../Layout/containtop';
export default class Partboilerleftbottom extends React.Component {
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
            <Boilerleftbottom height={400
            } width={400} alignSelf = 'center' />
                < View style = {
              styles.containerbottom4
            } >
            < TouchableOpacity style = {{height : 28 ,width : 32}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA004'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE1
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30CT003TT003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE2
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30CT004TT004'})
            
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE3
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30CT001TT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE4
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30CP003PI003'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE5
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30CT002TT002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE6
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30CP002PT002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE7
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA001PCV001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomE8
            } >
            < TouchableOpacity style = {{height : 20 ,width : 56}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30CP001PT001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV1
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA010'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV2
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA009'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV3
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA008'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV4
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA007'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV5
            } >
            < TouchableOpacity style = {{height : 12 ,width : 22}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA001'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV6
            } >
            < TouchableOpacity style = {{height : 12 ,width : 22}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA006'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV7
            } >
            < TouchableOpacity style = {{height : 12 ,width : 22}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA005'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV8
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA002'})
              } >
                </ TouchableOpacity>
                </ View>
                < View style = {
              styles.containerbottomV9
            } >
            < TouchableOpacity style = {{height : 8 ,width : 16}}
            onPress = {
                () =>
                this.props.navigation.navigate("PartV",{KKS:'10HAH30AA003'})
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
  containerbottom4: {
   backgroundColor: "#ff0",
   height: 28, 
   width: 32,
   position: "absolute",
   marginTop: 230,
   marginLeft: 113,
  },
  containerbottomE1: {
    backgroundColor: "#f00",
    height: 20,
    width: 55,
    position: "absolute",
    marginTop: 56,
    marginLeft: 30,
  },
  containerbottomE2: {
    height: 20,
    width: 56,
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 56,
    marginLeft: 85,
  },
  containerbottomE3: {
    backgroundColor: "#f00",
    height: 20,
    width: 56,
    position: "absolute",
    marginTop: 35,
    marginLeft: 318,
  },
  containerbottomE4: {
    height: 20,
    width: 56,
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 67,
    marginLeft: 67,
  },
  containerbottomE5: {
    backgroundColor: "#f00",
    height: 20,
    width: 56,
    position: "absolute",
    marginTop: 55,
    marginLeft: 318,
  },
  containerbottomE6: {
    height: 20,
    width: 56,
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 118,
    marginLeft: 78,
  },
  containerbottomE7: {
    backgroundColor: "#f00",
    height: 25,
    width: 56,
    position: "absolute",
    marginTop: 153,
    marginLeft: 85,
  },
  containerbottomE8: {
    height: 20,
    width: 56,
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 338,
    marginLeft: 77,
  },
   containerbottomV1: {
    height: 8,
    width: 16,
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 73,
    marginLeft: 138,
  },
  containerbottomV2: {
    height: 8,
    width: 16,
    position: "absolute",
    backgroundColor: '#f00',
    marginTop: 73,
    marginLeft: 172,
  },
  containerbottomV3: {
    height: 8,
    width: 16,
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 110,
    marginLeft: 138,
  },
  containerbottomV4: {
    height: 8,
    width: 16,
    position: "absolute",
    backgroundColor: '#f00',
    marginTop: 110,
    marginLeft: 172,
  },
  containerbottomV5: {
    height: 12,
    width: 22,
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 195,
    marginLeft: 96,
  },
  containerbottomV6: {
    height: 12,
    width: 22,
    position: "absolute",
    backgroundColor: '#f00',
    marginTop: 195,
    marginLeft: 130,
  },
  containerbottomV7: {
    height: 12,
    width: 22,
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 195,
    marginLeft: 164,
  },
  containerbottomV8: {
    height: 8,
    width: 16,
    position: "absolute",
    backgroundColor: '#f00',
    marginTop: 350.5,
    marginLeft: 138,
  },
  containerbottomV9: {
    height: 8,
    width: 16,
    position: "absolute",
    backgroundColor: '#AB6',
    marginTop: 350.5,
    marginLeft: 172,
  },
  bla: {
    flex: 0.03,
    alignItems: "center"
  }
});
