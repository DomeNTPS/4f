import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Modal,
  Image,
  Dimensions,
  ScrollView,
  AsyncStorage
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    const kks1 =  this.props.navigation.getParam("KKS1", "0");
    function remove_last_character(element) {
      return element.slice(0,element.length - 1)
    }
    const logout= async()=>{
    try{
    //    await AsyncStorage.clear
      this.props.navigation.navigate("Login")
       await AsyncStorage.removeItem('token')
       
       console.log("remove ")
    }catch(e){
        console.log(e)
    }}
    return (
      <View style={styles.container}>
         <View style={styles.containertop} >
           <TouchableOpacity
            onPress = {()=>logout()} >
            <Text style={{fontSize: 25}}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity
            title="Scan"
            onPress={() => navigation.navigate("ScanScreen")}
            >
            <Image
              style={{
                paddingRight: 20,
                paddingTop: 30,
                width: 50,
                height: 50
              }}
              source={require("../../Image/Untitled-1.png")}
            />
            <View>
              <Text style={{ paddingRight: 15 }}>Qr scan</Text>
            </View>
          </TouchableOpacity>   
        </View>
        <View style={styles.containerbottom}>
          <TouchableOpacity
              style={{marginTop: 20,alignSelf:'center'}}
              title="Scan"
              alignItems = "center"
              onPress = {
                () => this.props.navigation.navigate("Partboiler")
              }
            >
              <Text style={{ marginTop: 5, alignSelf: 'center', fontSize: 30,fontWeight:'bold' }}>Factory {remove_last_character(kks1)}</Text>
              <Image
                style = {
                  {
                    marginTop: 20,
                    width: 400,
                    height: 230
                  }
                }
                source={require("../../Image/boiler/Water-Treatment-Steam-Boiler-749x372.png")}>
              </Image>
              
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //justifyContent: 'center',
  },
  containerbottom: {
    flex: 1,
  },
   containertop: {
     height: 150,
     width: "100%",
     backgroundColor: "#fff",
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     display: 'flex',
     paddingLeft: 32,
     paddingRight: 10,
     paddingTop: 50
   },
});
