import React, {useState,useEffect} from "react";
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
  ScrollView
} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import axios from "axios";
// import Logo from "../../Image/boiler/Water-Treatment-Steam-Boiler-749x372.png";\

const PartV = (props) => {
  const { navigation } = props

  const [partInfo, setPartInfo] = useState({
    DateExpired: "loading",
    DateStart: "loading",
    KKS: "loading",
    NameEquip : "loading",
    URLimage :"loading",
    CountStock : "loading"
  })
  useEffect(() => {
    
    const fetching = async () => {
      try {
        const kks = navigation.getParam('KKS', 'some default value');
        let {
          data
        } = await axios.get(`http://35.240.203.149:5000/running_equipment/${kks}`)
        setPartInfo(data)
      } catch (e) {
        console.log(e)
      }
    }
    fetching()
  }, [])
  return (
     <View style={styles.container}>
        <View style={styles.containertop}>
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
          <ScrollView
            maximumZoomScale={5}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            width={'100%'}
          >  
          <Image
            style = {
              {
                marginTop: 30,
                width: 200,
                height: 200,
                alignSelf: "center"
              }
              }
            source = {
              // require("../../Image/boiler/PartV.png")
              {uri :partInfo.URLimage}
            }
            
            onPress={ () =>componentDidMount()}>
            
          </Image>
          <View style = { styles.blank} ></View>
          <Text style = {styles.parttextHead}>{partInfo.NameEquip}</Text>
          <Text style = {styles.parttextHead}>{partInfo.KKS}</Text>
          <Text style = {styles.parttext}>{partInfo.DateStart}</Text>
          <Text style = {styles.parttext}>{partInfo.DateExpired}</Text>
          <Text style = {styles.parttext}>{partInfo.CountStock}</Text>
          <TouchableOpacity
            style = {styles.container2}
            title = "withdraw" 
            onPress = {
              () => navigation.navigate("Edit")}>
                <Text> Withdraw </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
  )
}
PartV.navigationOptions = {header:null}
export default PartV


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"

    //justifyContent: 'center',
  },
  container2: {
    backgroundColor: 'orange',
    alignItems: 'center',
    //justifyContent: 'center',
    borderColor: 'white',
    borderRadius: 10,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },

  containertop: {
    flex: 0.1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    paddingTop: 20

    //justifyContent: 'center',
  },
  containerbottom: {
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 10,
    flex: 0.9,
    backgroundColor: "#fff",
    // alignItems: "center",
    //justifyContent: 'center',
  },
  containerpicture: {
    //flex: 0.8,
    backgroundColor: "#fff"
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  parttext: {
    alignSelf: "center",
    paddingTop: 10,
  },
  parttextHead: {
    alignSelf: "center",
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  blank:{
    flex: 0.2,
    alignItems: 'center',
  },
});
