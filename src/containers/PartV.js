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
import ContainerTop from '../Layout/containtop';
import Dayjs from 'dayjs'
import dayjs from "dayjs";
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
  const dateExpire = dayjs(partInfo.DateExpired).format("DD/MM/YYYY");
  const dateStart = dayjs(partInfo.DateStart).format("DD/MM/YYYY");
  return (
    <View style={styles.container}>
     <View style={styles.containertop}>
      <TouchableOpacity
            onPress={navigation.goBack}>
      <Text style={{fontSize: 25}}>Back</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.containerbottom}>
        <ScrollView
          maximumZoomScale={5}
          scrollEnabled={true}
          minimumZoomScale={1}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          width={"100%"}
        >
          <Image
            style={{
              marginTop: 30,
              width: 200,
              height: 200,
              alignSelf: "center"
            }}
            source={
              // require("../../Image/boiler/PartV.png")
              { uri: partInfo.URLimage }
            }
            onPress={() => componentDidMount()}
          ></Image>
          <View style={styles.textBackground}>
          <Text style={styles.parttextHead}>Name : {partInfo.NameEquip}</Text>
          <Text style={styles.parttext}>KKS          : {partInfo.KKS}</Text>
          <Text style={styles.parttext}>Date Start   : {dateStart}</Text>
          <Text style={styles.parttext}>Date Expired : {dateExpire}</Text>
          <Text style={styles.parttext}>Quantity     : {partInfo.CountStock}</Text>
          <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.buttonText}> Withdraw </Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
PartV.navigationOptions = {header:null}
export default PartV


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container2: {
    backgroundColor: "orange",
    alignItems: "center",
    //justifyContent: 'center',
    borderColor: "white",
    borderRadius: 10
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
  containerbottom: {
    flex: 1,
    backgroundColor: "#fff"
  },
  parttext: {
    // alignSelf: "center",
    paddingTop: 10
  },
  parttextHead: {
    // alignSelf: "center",
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "bold"
  },
  blank: {
    flex: 0.5,
    alignItems: "center",
    backgroundColor: "red"
  },
  textBackground: {
    backgroundColor: "#e2e2e2",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 300,
    marginLeft: 60,
    marginTop: 20,
    paddingBottom: 10,
    alignContent: "flex-start",
    paddingLeft: 50
  },
  buttonstyle: {
    marginTop: 30,
    backgroundColor: "orange",
    shadowColor: "#0000",
    borderRadius: 10,
    width: 100,
    marginLeft : 50
  },
  buttonText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
    },

});
